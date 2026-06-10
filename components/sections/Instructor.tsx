"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mic, Target, Award, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "500K+", label: "Escuchas Totales", icon: Mic },
  { value: "150+", label: "Episodios Producidos", icon: Target },
  { value: "5+", label: "Años Lanzando Podcasts", icon: Award },
];

export default function Instructor() {
  return (
    <SectionWrapper id="instructor" className="bg-brand-black relative">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />

      {/* Floating spots indicator card - z-index FRONT (z-30) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-6 right-6 z-30 max-w-xs p-4 rounded-2xl bg-brand-card/90 border border-orange-500/30 backdrop-blur-lg shadow-glow-sm flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
          <ShieldAlert className="w-4 h-4 animate-bounce" />
        </div>
        <div>
          <h5 className="text-xs font-bold text-white uppercase tracking-wider">
            ¡Cupos Limitados!
          </h5>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            Solo quedan <span className="text-orange-500 font-extrabold">7 asientos</span> VIP presenciales.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Instructor Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-card"
            >
              {/* Premium abstract background overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Carlos Berraco - Instructor"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-all duration-700"
              />
            </motion.div>
            
            {/* Design accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-orange-500/40 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-orange-500/40 rounded-br-3xl pointer-events-none" />
          </div>

          {/* Instructor Bio & Stats Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3 flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> El Host & Creador
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Aprende de <br />
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Carlos &quot;El Berraco&quot;
                </span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Creador del exitoso podcast <strong>Berracast</strong>, un show
                  top en las listas de negocios y mentalidad en Latinoamérica. Carlos
                  ha entrevistado a más de 100 líderes globales, construyendo un
                  canal de comunicación con miles de oyentes mensuales recurrentes.
                </p>
                <p>
                  Su metodología no se basa en teoría académica, sino en su propia
                  experiencia construyendo medios digitales, optimizando flujos de
                  trabajo de audio y logrando monetizar de manera autosostenible.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center sm:text-left">
                      <div className="flex items-center gap-2 justify-center sm:justify-start mb-1 text-orange-500">
                        <Icon className="w-4 h-4" />
                        <span className="text-xl sm:text-2xl font-black text-white">
                          {stat.value}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400 font-medium tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
