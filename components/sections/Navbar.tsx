"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Radio } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#detalles", label: "El Evento" },
  { href: "#instructor", label: "Instructor" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-4 left-4 right-4 z-50 bg-transparent rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <a
          href="#"
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="Berracast inicio"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-950/50 group-hover:scale-105 transition-transform">
            <Radio className="w-5 h-5 text-white animate-pulse" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-orange-600 transition-all">
            BERRACAST
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-orange-500 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="md" href="#inscripcion">
            Reservar Entrada
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden w-10 h-10 card-glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden card-glass border-t border-white/5 overflow-hidden rounded-2xl mt-2 mx-auto max-w-lg"
          >
            <nav className="flex flex-col p-5 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 hover:text-orange-500 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all text-sm font-bold cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  href="#inscripcion"
                  onClick={() => setOpen(false)}
                >
                  Reservar Entrada
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
