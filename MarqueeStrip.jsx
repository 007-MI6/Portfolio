const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { ArrowUpRight, Camera } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const SECTION_LABEL    = "02 — Visual Portfolio";
const HEADING          = "Photography & Works";
const SUBHEADING       = "Curated selections across technology, art, photography, and achievements.";

// External gallery link
const GALLERY_URL      = "https://teohmaojian.my.canva.site/";
const GALLERY_LABEL    = "Explore Full Gallery";
const GALLERY_SUBLABEL = "Opens Teoh Mao Jian's Photographic Portfolio";

// Preview image — shown as the teaser behind the CTA
// Replace with any image URL you like
const PREVIEW_IMAGE    = "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/582beef8f_IMG_3460.JPEG";

// Category chips shown below the card
const TAGS = ["Technology", "Arts", "Photography", "Achievements"];

// ────────────────────────────────────────────────────────────────

export default function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 py-6 pb-28">
      <SectionDivider label="Gallery" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionReveal className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.40em] mb-4" style={{ color: 'rgba(110,90,62,0.48)' }}>
            {SECTION_LABEL}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: 'rgba(28,22,14,0.90)' }}>
            {HEADING}
          </h2>
          <p className="font-editorial italic text-xl mt-2" style={{ color: 'rgba(110,90,62,0.42)' }}>
            {SUBHEADING}
          </p>
        </SectionReveal>

        {/* Main gallery CTA card */}
        <SectionReveal delay={0.15}>
          <a href={GALLERY_URL} target="_blank" rel="noopener noreferrer" className="block group">
            <motion.div
              whileHover={{ scale: 1.012, y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard rounded="3xl" className="overflow-hidden relative">
                {/* Background image */}
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <motion.img
                    src={PREVIEW_IMAGE}
                    alt="Gallery preview"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to top, rgba(18,14,8,0.82) 0%, rgba(18,14,8,0.30) 50%, transparent 100%)'
                  }} />

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s ease-in-out infinite',
                    }}
                  />

                  {/* Content over image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Camera className="w-4 h-4" style={{ color: 'rgba(220,195,150,0.85)' }} />
                          <span className="font-mono text-[10px] uppercase tracking-[0.40em]" style={{ color: 'rgba(220,195,150,0.70)' }}>
                            Teoh Mao Jian · Canva Portfolio
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white/95 leading-tight mb-1">
                          {GALLERY_LABEL}
                        </h3>
                        <p className="font-editorial italic text-base" style={{ color: 'rgba(220,200,165,0.65)' }}>
                          {GALLERY_SUBLABEL}
                        </p>
                      </div>

                      {/* Arrow pill */}
                      <motion.div
                        className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center ml-6"
                        style={{
                          background: 'rgba(255,253,249,0.12)',
                          border: '1px solid rgba(255,255,255,0.20)',
                          backdropFilter: 'blur(16px)',
                        }}
                        whileHover={{ scale: 1.15, rotate: 45 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white/80" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Tag chips below image */}
                <div className="px-8 py-5 flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(200,185,155,0.10)',
                        color: 'rgba(100,82,55,0.65)',
                        border: '1px solid rgba(180,160,120,0.15)',
                      }}>
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto font-body text-[12px] font-medium self-center" style={{ color: 'rgba(110,90,62,0.55)' }}>
                    View all →
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}