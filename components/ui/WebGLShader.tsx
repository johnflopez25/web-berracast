"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * WebGL Shader Background — Berracast Orange Wave
 * 
 * Creates a full-screen animated light wave using Three.js and GLSL shaders.
 * Colors are tuned to produce orange/amber tones matching the Berracast brand.
 */
export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  interface ShaderUniforms {
    resolution: { value: number[] };
    time: { value: number };
    xScale: { value: number };
    yScale: { value: number };
    distortion: { value: number };
  }

  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    camera: THREE.OrthographicCamera | null;
    renderer: THREE.WebGLRenderer | null;
    mesh: THREE.Mesh | null;
    uniforms: ShaderUniforms | null;
    animationId: number | null;
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Fragment shader — horizontal radio waveform (Berracast)
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        // Radio waveform: multiple overlapping frequencies
        // like a real radio signal with harmonics
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        // Main carrier wave + harmonic overtones for radio look
        float wave_r = sin((rx + time) * xScale)
                     + 0.5 * sin((rx + time) * xScale * 2.1 + 0.8)
                     + 0.25 * sin((rx + time) * xScale * 4.3 + 1.6)
                     + 0.15 * sin((rx + time) * xScale * 7.0 + 2.4)
                     + 0.1 * sin((rx + time) * xScale * 11.0 + 3.2);
        
        float wave_g = sin((gx + time) * xScale)
                     + 0.5 * sin((gx + time) * xScale * 2.1 + 0.8)
                     + 0.25 * sin((gx + time) * xScale * 4.3 + 1.6)
                     + 0.15 * sin((gx + time) * xScale * 7.0 + 2.4)
                     + 0.1 * sin((gx + time) * xScale * 11.0 + 3.2);
        
        float wave_b = sin((bx + time) * xScale)
                     + 0.5 * sin((bx + time) * xScale * 2.1 + 0.8)
                     + 0.25 * sin((bx + time) * xScale * 4.3 + 1.6)
                     + 0.15 * sin((bx + time) * xScale * 7.0 + 2.4)
                     + 0.1 * sin((bx + time) * xScale * 11.0 + 3.2);
        
        // Normalize amplitude (sum of coefficients: 1+0.5+0.25+0.15+0.1 = 2.0)
        wave_r *= yScale / 2.0;
        wave_g *= yScale / 2.0;
        wave_b *= yScale / 2.0;
        
        // Glow lines around the waveform
        float r = 0.04 / abs(p.y + wave_r);
        float g = 0.04 / abs(p.y + wave_g);
        float b = 0.04 / abs(p.y + wave_b);
        
        // Remap channels: push green toward yellow (r+g, no blue)
        vec3 glow = vec3(
          max(r, g * 0.8),   // red always strong
          g * 0.75 + r * 0.2, // green tinted warm
          b * 0.05            // blue nearly killed
        );
        
        // Intensity for white-hot blend
        float intensity = (r + g + b) / 3.0;
        
        // Yellow-orange base
        vec3 amber = vec3(1.0, 0.7, 0.0);
        // White-hot core
        vec3 white = vec3(1.0, 0.97, 0.85);
        
        // Blend: bright areas → white, dim areas → amber/yellow
        float blend = smoothstep(0.3, 1.8, intensity);
        vec3 color = mix(amber * glow, white * intensity, blend);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setClearColor(new THREE.Color(0x050505));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      };

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms as unknown as Record<string, THREE.IUniform>,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.01;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width, height];
    };

    initScene();
    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener("resize", handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block"
      aria-hidden="true"
    />
  );
}
