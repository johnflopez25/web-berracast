"use client";

import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import { WebGLShader } from "@/components/ui/WebGLShader";
import { MailerLiteForm } from "@/components/ui/MailerLiteForm";

/* ─────────────────────────────────────────────────────────
   ANIMATED MICROPHONE SVG
───────────────────────────────────────────────────────── */
function AnimatedMic() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-orange-500/30"
          style={{ borderRadius: 0 }}
          initial={{ width: 120, height: 120, opacity: 0.6 }}
          animate={{
            width: 120 + i * 80,
            height: 120 + i * 80,
            opacity: 0,
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Mic body */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* SVG Mic */}
        <svg
          width="120"
          height="180"
          viewBox="0 0 120 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_24px_rgba(249,115,22,0.7)]"
        >
          {/* Mic capsule */}
          <rect x="35" y="10" width="50" height="80" rx="0" fill="#f97316" />
          <rect x="39" y="14" width="42" height="72" rx="0" fill="#ea580c" />
          {/* Grille lines */}
          {[24, 34, 44, 54, 64, 74].map((y) => (
            <line key={y} x1="39" y1={y} x2="81" y2={y} stroke="#f97316" strokeWidth="1.5" opacity="0.5" />
          ))}
          {/* Stand arm */}
          <rect x="57" y="90" width="6" height="50" fill="#f97316" />
          {/* Base */}
          <rect x="30" y="140" width="60" height="8" fill="#f97316" />
          <rect x="20" y="148" width="80" height="6" fill="#ea580c" />
          {/* ON AIR dot */}
          <circle cx="60" cy="52" r="6" fill="#fff" opacity="0.9" />
        </svg>

        {/* ON AIR badge */}
        <motion.div
          className="mt-6 flex items-center gap-2 border-2 border-orange-500 bg-black px-4 py-2"
          animate={{ borderColor: ["#f97316", "#fbbf24", "#f97316"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.span
            className="w-2.5 h-2.5 bg-orange-500 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-[11px] font-black tracking-[0.3em] text-orange-400 uppercase">
            On Air
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}



export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-black">
      {/* ── WebGL animated background ── */}
      <WebGLShader />
      {/* Dark overlay to dim the background */}
      <div className="fixed inset-0 bg-black/60 z-0" />

      {/* ── Top marquee bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-orange-600 flex items-center overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap text-black font-black text-[10px] tracking-[0.2em] uppercase">
          {["BERRACAST", "PODCAST", "BERRAC@S", "SIN FILTRO", "PRÓXIMAMENTE"].flatMap((t, i) => (
            [<span key={`a-${i}`}>◆ {t}</span>, <span key={`b-${i}`}>◆ {t}</span>]
          ))}
        </div>
      </div>

      {/* ── Main split layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen pt-8">

        {/* ══ LEFT PANEL — Hero + Mic ══ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center
                     w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen
                     border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800
                     px-8 py-16 lg:py-0 text-center lg:text-left"
        >
          {/* Background grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 w-full">
            {/* Single unified dark card — mic + text together */}
            <div className="flex flex-col gap-6 bg-black/85 backdrop-blur-md border border-zinc-700 p-8 w-full">

              {/* Top row: mic + logo */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Mic — hidden on mobile, visible sm+ */}
                <div className="hidden sm:flex h-56 w-44 flex-shrink-0">
                  <AnimatedMic />
                </div>

                {/* Logo + headline */}
                <div className="flex flex-col gap-4 text-center sm:text-left">
                  {/* Logo */}
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="w-8 h-8 bg-orange-600 flex items-center justify-center border border-orange-400">
                      <Radio className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm font-black tracking-[0.2em] text-white uppercase">
                      Berracast
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                    El podcast<br />
                    <span className="text-orange-500">de los<br />BERRAC@S</span>
                  </h1>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800 w-full" />

              {/* Bottom row: description + social proof */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-zinc-200 leading-relaxed">
                  Únete a nuestra comunidad y sé de los primeros en recibir{" "}
                  <span className="text-orange-400 font-bold">contenido exclusivo</span>,
                  episodios antes de que salgan al aire y estrategias reales
                  que no encontrarás en ningún otro lado.
                </p>

                {/* Benefits list */}
                <ul className="flex flex-col gap-2">
                  {[
                    "🎙️ Acceso anticipado a cada episodio",
                    "🔥 Contenido exclusivo solo para la comunidad",
                    "⚡ Estrategias reales de negocios sin filtro",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <span className="text-orange-500 font-black">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-3 border-2 border-orange-600/40 bg-orange-950/50 px-4 py-2.5 w-fit"
                >
                  <div className="flex -space-x-3">
                    {[
                      { img: "https://i.pravatar.cc/40?img=11", alt: "Miembro 1" },
                      { img: "https://i.pravatar.cc/40?img=47", alt: "Miembro 2" },
                      { img: "https://i.pravatar.cc/40?img=32", alt: "Miembro 3" },
                    ].map(({ img, alt }) => (
                      <div
                        key={alt}
                        className="w-9 h-9 border-2 border-black overflow-hidden flex-shrink-0"
                        style={{ borderRadius: 0 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={alt}
                          width={36}
                          height={36}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(100%)" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-black">
                      Comunidad fundadora
                    </span>
                    <span className="text-[10px] text-orange-400 font-medium">
                      Únete antes del lanzamiento
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ══ RIGHT PANEL — Form ══ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center justify-center
                     w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen
                     px-6 sm:px-12 py-16 lg:py-0"
        >
          {/* Form panel */}
          <div className="relative w-full max-w-md">
            {/* Outer brutal frame */}
            <div className="border-2 border-zinc-700 p-1">
              <div className="border-2 border-orange-600 bg-black/70 backdrop-blur-md p-8 sm:p-10">

                {/* Panel header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 bg-orange-500" />
                    </span>
                    <span className="text-[10px] font-black tracking-[0.3em] text-orange-400 uppercase">
                      Acceso anticipado
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-2">
                    Regístrate ahora
                  </h2>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                    Cupos limitados para la comunidad fundadora.
                    Únete antes del lanzamiento.
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-orange-600 via-amber-400 to-transparent mb-8" />

                {/* The form */}
                <MailerLiteForm />

                <p className="text-[10px] text-zinc-600 text-center font-medium tracking-wide mt-4">
                  Sin spam. Solo contenido de valor. Puedes salirte cuando quieras.
                </p>

              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500" />
          </div>
        </motion.div>

      </div>

      {/* Copyright */}
      <div className="fixed bottom-3 left-0 right-0 z-20 flex justify-center">
        <p className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Berracast
        </p>
      </div>
    </div>
  );
}
