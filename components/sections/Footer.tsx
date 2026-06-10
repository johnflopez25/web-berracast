"use client";

import { Radio, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="flex items-center gap-3 mb-4 group"
              aria-label="Regresar al inicio"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                <Radio className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-black tracking-wider text-white group-hover:text-orange-500 transition-colors">
                BERRACAST
              </span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm leading-relaxed">
              El podcast oficial y taller práctico de creación digital y mentalidad
              de crecimiento para emprendedores que hacen que las cosas pasen.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#beneficios"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#para-quien"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  ¿Para quién?
                </a>
              </li>
              <li>
                <a
                  href="#detalles"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Ubicación e Inscripción
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-xs sm:text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Comunidad
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="Twitter Berracast"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="YouTube Berracast"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="GitHub Berracast"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-extrabold text-orange-500 hover:text-orange-400 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              VOLVER ARRIBA
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-600 text-center sm:text-left">
            © {new Date().getFullYear()} Berracast. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-[11px] text-zinc-600">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Políticas de Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
