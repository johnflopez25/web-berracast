"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Necesito conocimientos técnicos o equipos profesionales?",
    answer:
      "No. El taller está diseñado para llevarte desde cero absoluto. Aprenderás a conseguir un sonido profesional utilizando tu teléfono móvil, un micrófono básico de solapa o el equipamiento básico que ya tengas en casa.",
  },
  {
    question: "¿Cómo funciona la modalidad presencial en Bogotá?",
    answer:
      "Nos reuniremos el sábado 11 de Julio en el Hotel B3 Bogotá (Carrera 11 # 84-24). La sesión incluye coffee break premium, almuerzo VIP de trabajo y acceso a mesas redondas de networking directo con sponsors y Carlos.",
  },
  {
    question: "¿Qué pasa si compro la entrada y no puedo asistir en vivo?",
    answer:
      "No te preocupes. Todas las entradas (tanto Digital como VIP) incluyen acceso de por vida a las grabaciones completas del taller en alta definición y a la carpeta de recursos exclusivos (plantillas, guías y formatos).",
  },
  {
    question: "¿Cuándo y cómo recibiré el acceso online?",
    answer:
      "Una vez completes la inscripción, recibirás un correo de confirmación de tu cupo. Tres días antes del evento te enviaremos las credenciales de acceso para la transmisión privada de alta fidelidad y el enlace a Discord.",
  },
  {
    question: "¿Hay alguna garantía de devolución?",
    answer:
      "Sí. Confiamos plenamente en el valor del taller. Si asistes a las primeras 2 horas del entrenamiento y consideras que la información no cumple tus expectativas, nos lo dices y te reembolsamos el 100% sin preguntas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-brand-black relative">
      {/* Light glow background */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3 flex items-center justify-center gap-1">
            <HelpCircle className="w-4 h-4" /> Preguntas Frecuentes
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Resolvemos tus Dudas <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Al Instante
            </span>
          </h3>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden backdrop-blur-sm transition-colors duration-300 hover:border-white/10"
              >
                {/* Header Toggle button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white pr-4 group-hover:text-orange-400 transition-colors">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-orange-500" />
                  </motion.div>
                </button>

                {/* Answer Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
