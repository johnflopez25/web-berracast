"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Radio, ArrowRight, Clock, Zap } from "lucide-react";
import { WebGLShader } from "@/components/ui/WebGLShader";

/* ── countdown logic ──────────────────────────────────── */

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date("2026-07-11T09:00:00-05:00");

function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function TimerBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-orange-500 bg-black/60 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-4 min-w-[56px] sm:min-w-[80px] text-center">
        <span className="text-2xl sm:text-5xl font-black text-orange-500 tabular-nums tracking-tighter font-mono">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-black mt-2">
        {label}
      </span>
    </div>
  );
}

/* ── page component ───────────────────────────────────── */

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* ── WebGL animated background ── */}
      <WebGLShader />

      {/* ── brutal container frame ── */}
      <div className="relative z-10 border-2 border-zinc-800 p-1.5 sm:p-2 w-[95vw] max-w-3xl mx-auto">
        <main className="relative border-2 border-zinc-800 bg-black/40 backdrop-blur-sm py-10 sm:py-16 px-5 sm:px-10 overflow-hidden">

          {/* Top status marquee-style bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-orange-600 flex items-center overflow-hidden">
            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap text-black font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase">
              <span>◆ BERRACAST</span>
              <span>◆ EN CONSTRUCCIÓN</span>
              <span>◆ PRÓXIMAMENTE</span>
              <span>◆ PODCAST</span>
              <span>◆ BERRACAST</span>
              <span>◆ EN CONSTRUCCIÓN</span>
              <span>◆ PRÓXIMAMENTE</span>
              <span>◆ PODCAST</span>
              <span>◆ BERRACAST</span>
              <span>◆ EN CONSTRUCCIÓN</span>
              <span>◆ PRÓXIMAMENTE</span>
              <span>◆ PODCAST</span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="mt-10 flex flex-col items-center text-center">

            {/* Logo brutal */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-orange-600 flex items-center justify-center border-2 border-orange-400">
                <Radio className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-[0.15em] text-white uppercase">
                BERRACAST
              </span>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-6 inline-flex items-center gap-2.5 border-2 border-orange-500/50 bg-orange-950/30 px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-orange-400 uppercase">
                PÁGINA EN CONSTRUCCIÓN
              </span>
            </motion.div>

            {/* ── BRUTAL HEADLINE ── */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-4xl sm:text-6xl md:text-[clamp(3rem,8vw,6rem)] font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
            >
              EL PODCAST<br />
              <span className="text-orange-500">DE LOS BERRACOS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs sm:text-sm text-zinc-400 font-medium max-w-md mx-auto mb-10 leading-relaxed uppercase tracking-wider"
            >
              Estamos preparando nuestro primer episodio.
              Entrevistas sin filtro, mentalidad berraca y estrategias
              reales de negocios. Muy pronto.
            </motion.p>

            {/* ── COUNTDOWN BRUTAL ── */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-col items-center mb-10"
              >
                <span className="text-[10px] sm:text-xs font-black text-orange-500 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  LANZAMIENTO ESTIMADO
                </span>
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <TimerBlock value={timeLeft.days} label="Días" />
                  <span className="text-orange-600 text-xl sm:text-3xl font-black mb-6 font-mono">:</span>
                  <TimerBlock value={timeLeft.hours} label="Horas" />
                  <span className="text-orange-600 text-xl sm:text-3xl font-black mb-6 font-mono">:</span>
                  <TimerBlock value={timeLeft.minutes} label="Min" />
                  <span className="text-orange-600 text-xl sm:text-3xl font-black mb-6 font-mono">:</span>
                  <TimerBlock value={timeLeft.seconds} label="Seg" />
                </div>
              </motion.div>
            )}

            {/* ── CTA SECTION ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="border-t-2 border-zinc-800 pt-8 w-full max-w-md"
            >
              <p className="text-[11px] sm:text-xs text-zinc-400 font-bold uppercase tracking-wider mb-5 leading-relaxed">
                ¿Quieres estar pendiente de los nuevos episodios?
                <br />
                Ingresa a nuestra comunidad.
              </p>

              <a
                href="https://discord.gg/berracast"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-black font-black text-xs sm:text-sm uppercase tracking-[0.15em] px-8 py-4 border-2 border-orange-400 transition-all duration-150 active:translate-y-0.5 cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                UNIRME A LA COMUNIDAD
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
              </a>
            </motion.div>

          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />

        </main>
      </div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-6 text-[10px] text-zinc-600 font-black uppercase tracking-[0.2em]"
      >
        © {new Date().getFullYear()} BERRACAST
      </motion.p>
    </div>
  );
}
