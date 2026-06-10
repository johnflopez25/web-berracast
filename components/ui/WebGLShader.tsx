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

    // Fragment shader — audio waveform bars (Berracast)
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      // Pseudo-random hash
      float hash(float n) {
        return fract(sin(n) * 43758.5453123);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        // Number of bars across the screen
        float barCount = 80.0;
        float barWidth = 2.0 / barCount;
        
        // Which bar column is this pixel in
        float barIndex = floor((p.x + 1.0) / barWidth);
        float barCenter = (barIndex + 0.5) * barWidth - 1.0;
        
        // Distance from bar center (for bar thickness)
        float distFromCenter = abs(p.x - barCenter);
        float barThickness = barWidth * 0.3;
        
        // Is this pixel inside a bar column?
        float inBar = step(distFromCenter, barThickness);
        
        // Compute bar height using layered sine waves (radio waveform envelope)
        float t = time * 0.8;
        float bx = barCenter * xScale;
        
        float barHeight = 0.0;
        barHeight += sin(bx * 2.0 + t) * 0.35;
        barHeight += sin(bx * 3.7 + t * 1.3) * 0.25;
        barHeight += sin(bx * 5.3 + t * 0.7 + 1.0) * 0.18;
        barHeight += sin(bx * 8.1 + t * 1.8 + 2.0) * 0.12;
        barHeight += sin(bx * 13.0 + t * 0.5 + 3.5) * 0.08;
        // Add some randomness per bar for organic feel
        barHeight += hash(barIndex * 0.137) * 0.08 - 0.04;
        
        barHeight = abs(barHeight) * yScale * 1.8;
        
        // Symmetric: bar extends from -barHeight to +barHeight
        float inHeight = step(abs(p.y), barHeight);
        
        // Combine bar mask
        float mask = inBar * inHeight;
        
        // Soft glow around bars (stronger)
        float glowDist = abs(abs(p.y) - barHeight);
        float glow = inBar * 0.03 / (glowDist + 0.01) * step(abs(p.y), barHeight + 0.15);
        
        // Wide ambient glow (background radiation)
        float ambientGlow = 0.008 / (glowDist + 0.06);
        
        // Edge brightness: bars brighter at tips
        float tipGlow = smoothstep(barHeight - 0.06, barHeight, abs(p.y)) * inHeight;
        
        // Intensity — much brighter
        float intensity = mask * 1.2 + tipGlow * 0.6 + glow * 0.5 + ambientGlow * 0.15;
        
        // Vibrant orange
        vec3 orange = vec3(1.0, 0.5, 0.0);
        // White-hot for peaks
        vec3 white = vec3(1.0, 0.95, 0.8);
        
        // Blend: peaks → white-hot, body → bright orange
        float blend = smoothstep(0.5, 1.3, intensity);
        vec3 color = mix(orange * intensity * 1.5, white * intensity, blend);
        
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
