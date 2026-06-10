"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Check, MapPin, Calendar, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";

const tickets = [
  {
    name: "PASE DIGITAL",
    price: "$39.000 COP",
    description: "Acceso online desde cualquier parte del mundo.",
    popular: false,
    perks: [
      "Transmisión en vivo HD",
      "Grabaciones del evento de por vida",
      "Material de apoyo digital (PDF)",
      "Acceso al canal de Discord privado",
    ],
    buttonText: "Comprar Pase Digital",
    buttonVariant: "outline" as const,
  },
  {
    name: "PASE PRESENCIAL VIP",
    price: "$149.000 COP",
    description: "La experiencia completa presencial con networking activo.",
    popular: true,
    perks: [
      "Todo lo del Pase Digital",
      "Asiento VIP en Hotel B3 Bogotá",
      "Coffee break premium & Almuerzo",
      "Sesión de preguntas en vivo",
      "Certificado físico de asistencia",
    ],
    buttonText: "Reservar Asiento VIP",
    buttonVariant: "gold" as const,
  },
  {
    name: "PASE TOTAL MENTORÍA",
    price: "$299.000 COP",
    description: "Para creadores que buscan feedback personalizado de inmediato.",
    popular: false,
    perks: [
      "Todo lo del Pase VIP",
      "Auditoría 1-a-1 de tu proyecto (1 Hora)",
      "Plantillas de diseño para portadas",
      "Soporte prioritario por WhatsApp",
    ],
    buttonText: "Aplicar a Mentoría",
    buttonVariant: "primary" as const,
  },
];

export default function EventDetails() {
  return (
    <SectionWrapper id="detalles" className="bg-brand-dark/30 border-y border-white/5 relative">
      {/* Light glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3">
            Inscripciones Abiertas
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Elige tu Entrada al Evento <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Berracast Masterclass
            </span>
          </h3>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20" id="inscripcion">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col h-full ${
                ticket.popular
                  ? "card-glass-orange border-2 border-amber-500/40 shadow-glow"
                  : "card-glass border border-white/5"
              }`}
            >
              {/* Highlight Tag */}
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-brand-black text-[11px] sm:text-xs font-black tracking-widest uppercase">
                  MÁS RECOMENDADO
                </div>
              )}

              {/* Title & Price */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-zinc-400 tracking-wider mb-2">
                  {ticket.name}
                </h4>
                <div className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {ticket.price}
                </div>
                <p className="text-xs text-zinc-400">
                  {ticket.description}
                </p>
              </div>

              {/* Perks List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {ticket.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${ticket.popular ? "text-amber-400" : "text-orange-500"}`} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Button
                variant={ticket.buttonVariant}
                size="md"
                fullWidth
                href="#contacto"
              >
                {ticket.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Location & Maps split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900/40 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
          <div>
            <h4 className="text-xs font-bold text-orange-500 tracking-wider uppercase mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Lugar y Fecha del Taller
            </h4>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Hotel B3 Bogotá
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm sm:text-base">Dirección Física</h5>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Carrera 11 # 84-24, Bogotá, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm sm:text-base">Fecha Estimada</h5>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Sábado 11 de Julio de 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm sm:text-base">Horario</h5>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    9:00 AM — 6:00 PM (Hora Colombia)
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="md"
              href="https://maps.app.goo.gl/tWp47R5Yn4XbX2xG9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-4 h-4" />
              Ver en Google Maps
            </Button>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10 relative shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.621743606364!2d-74.0537089!3d4.6657989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a7dcd2b8109%3A0xe5e13d96914d7920!2sHotel%20B3%20Virrey!5e0!3m2!1ses-419!2sco!4v1717000000000!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Hotel B3"
              className="absolute inset-0 grayscale contrast-125 opacity-80"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
