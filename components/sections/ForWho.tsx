"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { UserCheck, Briefcase, Zap, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    icon: Briefcase,
    title: "Emprendedores",
    subtitle: "Dueños de negocio y marcas",
    description:
      "Aumenta la autoridad de tu marca personal y corporativa. Atrae clientes ideales creando contenido de alto valor.",
    gradient: "from-zinc-900 via-zinc-900 to-orange-950/30",
  },
  {
    icon: Zap,
    title: "Creadores",
    subtitle: "YouTubers y comunicadores",
    description:
      "Lleva tus habilidades de comunicación al siguiente nivel. Aprende a producir como un estudio pro y monetizar.",
    gradient: "from-zinc-900 via-zinc-900 to-amber-950/30",
  },
  {
    icon: GraduationCap,
    title: "Profesionales",
    subtitle: "Consultores y coaches",
    description:
      "Comparte tu experiencia especializada con un público más amplio. Posiciónate como referente y expande tu red.",
    gradient: "from-zinc-900 via-zinc-900 to-zinc-800/30",
  },
  {
    icon: UserCheck,
    title: "Apasionados",
    subtitle: "Cualquiera con un mensaje",
    description:
      "Lanza tu primer episodio sin frustración técnica. Evita los errores iniciales y publica con confianza total.",
    gradient: "from-zinc-900 via-zinc-900 to-orange-950/20",
  },
];

export default function ForWho() {
  return (
    <SectionWrapper id="para-quien" className="bg-brand-black relative">
      {/* Light glow background */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3">
            ¿Es para ti?
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ¿Para Quién está Diseñado <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Este Entrenamiento?
            </span>
          </h3>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden p-6 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${group.gradient} transition-all duration-300 hover:border-orange-500/20 hover:scale-[1.02]`}
              >
                {/* Subtle light reflex top border */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Subtitle */}
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1 block">
                  {group.subtitle}
                </span>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-4">
                  {group.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {group.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
