"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <SectionWrapper id="contacto" className="bg-brand-black relative py-20">
      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="card-glass-orange border border-orange-500/20 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-glow">
          {/* Subtle light reflex top border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/40 border border-orange-500/30">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-orange-400 uppercase">
              ÚLTIMOS CUPOS EN PREVENTA
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            ¿Listo para Lanzar un <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Podcast Extraordinario?
            </span>
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            No dejes tu mensaje flotando en el aire. Aprovecha la preventa con 50%
            de descuento y obtén las herramientas para estructurar, grabar y rentabilizar tu show.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button variant="gold" size="lg" href="#inscripcion">
              Reservar Pase Presencial VIP
              <ArrowRight className="w-4 h-4 text-brand-black" />
            </Button>
            <Button variant="secondary" size="lg" href="#inscripcion">
              Comprar Pase Digital
            </Button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-zinc-500 mt-6">
            Garantía de reembolso de 100% durante las primeras 2 horas del taller.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
