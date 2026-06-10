"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mic, Flame, DollarSign, Share2, Compass, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Mic,
    title: "Grabación & Sonido Pro",
    description: "Configura el entorno perfecto para lograr audio de estudio sin necesidad de presupuestos millonarios.",
  },
  {
    icon: Flame,
    title: "Estructura Magnética",
    description: "Aprende a estructurar tus guiones para mantener enganchados a tus oyentes durante todo el episodio.",
  },
  {
    icon: DollarSign,
    title: "Monetización Efectiva",
    description: "Sistemas prácticos de patrocinios, membresías y ventas indirectas para rentabilizar tu podcast rápido.",
  },
  {
    icon: Share2,
    title: "Efecto Viral (Shorts/TikTok)",
    description: "Crea micro-contenido de impacto para captar tráfico orgánico de forma constante e incremental.",
  },
  {
    icon: Compass,
    title: "Dirección Artística",
    description: "Define tu marca, identidad visual, selección musical y estilo de entrevistas para destacar del resto.",
  },
  {
    icon: Users,
    title: "Networking Exclusivo",
    description: "Conéctate con creadores, emprendedores y sponsors potenciales en una comunidad privada.",
  },
];

export default function Benefits() {
  return (
    <SectionWrapper id="beneficios" className="bg-brand-dark/50 relative border-y border-white/5">
      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3">
            ¿Qué vas a lograr?
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Los Beneficios de Formarte en <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              La Experiencia Berracast
            </span>
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group card-glass p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-glow-sm"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-orange-950/50 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-glow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
