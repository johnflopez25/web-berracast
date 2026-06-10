"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-black">
      {/* City Skyline Background with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop"
          alt="Ciudad Nocturna Fondo"
          fill
          priority
          className="object-cover opacity-15 mix-blend-luminosity filter blur-[1px]"
        />
        {/* Subtle Orange Glow Radial Gradients */}
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      {/* Hero content container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Discount Badge with Blinking LED */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/20 backdrop-blur-md"
        >
          {/* Pulsing LED indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-orange-400 uppercase">
            DESCUENTO DE LANZAMIENTO — 50% OFF
          </span>
        </motion.div>

        {/* Imposing Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white"
        >
          CREA UN PODCAST <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            DE NIVEL PREMIUM
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-zinc-400 font-medium max-w-2xl mb-8 leading-relaxed"
        >
          Aprende las estrategias de producción, guion, monetización y mentalidad
          necesarias para construir un show de alto impacto. Transforma tu voz en
          tu activo más valioso.
        </motion.p>

        {/* Action Button CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Button variant="gold" size="lg" href="#inscripcion" className="shadow-orange-500/10">
            <Sparkles className="w-5 h-5 text-brand-black" />
            Reservar Mi Entrada
          </Button>
        </motion.div>

        {/* Quick event meta */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap gap-y-4 gap-x-8 text-xs sm:text-sm font-semibold text-zinc-500 justify-center"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>SÁBADO 11 DE JULIO</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>CENTRO DE CONVENCIONES Y ONLINE</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
