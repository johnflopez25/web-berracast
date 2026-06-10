"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Play, Maximize2, X, Video, MessageSquare } from "lucide-react";
import Image from "next/image";

const videoTestimonials = [
  {
    id: "clip-1",
    title: "El secreto del audio premium",
    duration: "0:58",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    // Standard vertical friendly YouTube embed (example podcast clip)
    embedUrl: "https://www.youtube.com/embed/5D345L-kQ1o?autoplay=1",
  },
  {
    id: "clip-2",
    title: "Cómo perder el miedo al micrófono",
    duration: "0:45",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=600&auto=format&fit=crop",
    embedUrl: "https://www.youtube.com/embed/n33Zz-tP96A?autoplay=1",
  },
  {
    id: "clip-3",
    title: "El gancho que duplica retención",
    duration: "0:52",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop",
    embedUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1",
  },
];

const chatScreenshots = [
  { src: "/Chat1.svg", alt: "Reseña de Javier M. en chat", width: 400, height: 240 },
  { src: "/Chat2.svg", alt: "Reseña de Sofía Castro en chat", width: 400, height: 340 },
  { src: "/Chat3.svg", alt: "Reseña de Mateo R. en chat", width: 400, height: 270 },
  { src: "/Chat4.svg", alt: "Reseña de Andrea G. en chat", width: 400, height: 310 },
];

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState<"videos" | "chats">("videos");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const activeVideoData = videoTestimonials.find((v) => v.id === activeVideo);

  return (
    <SectionWrapper id="testimonios" className="bg-brand-dark/50 relative border-y border-white/5">
      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs sm:text-sm font-extrabold text-orange-500 uppercase tracking-widest mb-3">
            Casos de Éxito
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Nuestra Comunidad Habla <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Por Nosotros
            </span>
          </h3>
        </div>

        {/* Custom Premium Tabs Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-white/5 backdrop-blur-md relative">
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 relative cursor-pointer ${
                activeTab === "videos" ? "text-white z-10" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeTab === "videos" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-xl bg-orange-600 shadow-lg shadow-orange-950/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Video className="w-4 h-4 shrink-0 relative z-20" />
              <span className="relative z-20">Video Clips (9:16)</span>
            </button>

            <button
              onClick={() => setActiveTab("chats")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 relative cursor-pointer ${
                activeTab === "chats" ? "text-white z-10" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeTab === "chats" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-xl bg-orange-600 shadow-lg shadow-orange-950/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <MessageSquare className="w-4 h-4 shrink-0 relative z-20" />
              <span className="relative z-20">Opiniones y Chats</span>
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="relative min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === "videos" ? (
              <motion.div
                key="videos-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {videoTestimonials.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video.id)}
                    className="group relative aspect-[9/16] max-w-[270px] mx-auto w-full rounded-2xl overflow-hidden border border-white/10 card-glass cursor-pointer hover:border-orange-500/30 transition-all duration-300 hover:shadow-glow-sm"
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover scale-105 group-hover:scale-100 transition-all duration-500 opacity-60 group-hover:opacity-85"
                    />

                    {/* Dark gradient cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-950/50 scale-100 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </div>

                    {/* Title & Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <span className="text-[10px] font-black tracking-widest text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/20 uppercase mb-2 inline-block">
                        TESTIMONIO
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {video.title}
                      </h4>
                    </div>

                    {/* Duration badge */}
                    <span className="absolute top-3 right-3 z-20 bg-brand-black/75 px-2 py-1 rounded-md text-[10px] font-bold text-zinc-400">
                      {video.duration}
                    </span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="chats-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="columns-1 sm:columns-2 gap-4 max-w-2xl mx-auto space-y-4"
              >
                {chatScreenshots.map((chat) => (
                  <div
                    key={chat.src}
                    onClick={() => setActiveLightbox(chat.src)}
                    className="relative group overflow-hidden rounded-2xl border border-white/5 cursor-pointer break-inside-avoid shadow-card"
                  >
                    {/* SVG Image (rendered w-full h-auto) */}
                    <Image
                      src={chat.src}
                      alt={chat.alt}
                      width={chat.width}
                      height={chat.height}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />

                    {/* Hover Overlay with Zoom Button (Violeta accent) */}
                    <div className="absolute inset-0 bg-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-900/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Player (YouTube Vertical 9:16) */}
        <AnimatePresence>
          {activeVideo && activeVideoData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-md"
            >
              {/* Close backdrop */}
              <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative bg-zinc-950 border border-white/10 rounded-2xl w-full max-w-[340px] aspect-[9/16] overflow-hidden shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Vertical Iframe Player */}
                <iframe
                  src={activeVideoData.embedUrl}
                  title={activeVideoData.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal (For Chats) */}
        <AnimatePresence>
          {activeLightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-md"
            >
              {/* Close backdrop */}
              <div className="absolute inset-0" onClick={() => setActiveLightbox(null)} />

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-lg w-full z-10 overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Zoomed Image */}
                {(() => {
                  const activeData = chatScreenshots.find((c) => c.src === activeLightbox);
                  return activeData ? (
                    <Image
                      src={activeLightbox}
                      alt="Opinión Zoomed"
                      width={activeData.width}
                      height={activeData.height}
                      className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl bg-zinc-950"
                    />
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SectionWrapper>
  );
}
