const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, ArrowUpRight, Camera } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const SECTION_LABEL    = "05 — Connect";
const HEADING          = "Let's Connect";
const SUBHEADING       = "Open to conversations, collaborations, and new opportunities.";

const GALLERY_URL      = "https://teohmaojian.my.canva.site/";
const GALLERY_LABEL    = "Photography Portfolio";
const GALLERY_SUBLABEL = "Explore on Canva →";
const GALLERY_IMAGE    = "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/582beef8f_IMG_3460.JPEG";
const GALLERY_TAGS     = ["Technology", "Arts", "Photography", "Achievements"];

const INSTAGRAM_URL    = "https://instagram.com/rainy_daze0";
const INSTAGRAM_HANDLE = "@rainy_daze0";

const EMAIL_ADDRESS    = "teohmaojian@gmail.com";

const FOOTER_TEXT = "Designed & built by Teoh Mao Jian — 2026";

// ────────────────────────────────────────────────────────────────

const T = {
  label:   'rgba(180,155,100,0.42)',
  heading: 'rgba(232,218,188,0.95)',
  sub:     'rgba(180,158,115,0.45)',
  tag:     'rgba(175,152,105,0.55)',
  tagBg:   'rgba(200,175,120,0.07)',
  tagBd:   'rgba(200,175,120,0.13)',
  rowText: 'rgba(215,200,168,0.82)',
  rowIcon: 'rgba(180,158,105,0.62)',
  rowArr:  'rgba(150,130,88,0.38)',
  footer:  'rgba(160,140,95,0.28)',
};

export default function ConnectSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.10, 1.0]);
  const cardY    = useTransform(scrollYProgress, [0, 1], [28, -18]);

  return (
    <section ref={ref} id="connect" className="relative z-10 py-6 pb-32 overflow-hidden">
      <SectionDivider label="Connect" />

      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <SectionReveal className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.40em] mb-4" style={{ color: T.label }}>
            {SECTION_LABEL}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-3" style={{ color: T.heading }}>
            {HEADING}
          </h2>
          <p className="font-editorial italic text-xl" style={{ color: T.sub }}>
            {SUBHEADING}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12} className="space-y-3">

          {/* Gallery hero */}
          <motion.div style={{ y: cardY }}>
            <a href={GALLERY_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <motion.div whileHover={{ scale: 1.010, y: -5 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <GlassCard rounded="3xl" className="overflow-hidden">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={GALLERY_IMAGE}
                      alt="Photography portfolio preview"
                      className="w-full h-full object-cover"
                      style={{ scale: imgScale }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,6,8,0.85) 0%, rgba(6,6,8,0.22) 55%, transparent 100%)' }} />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Camera className="w-3.5 h-3.5" style={{ color: 'rgba(200,175,120,0.72)' }} />
                            <span className="font-mono text-[10px] uppercase tracking-[0.36em]" style={{ color: 'rgba(200,175,120,0.55)' }}>
                              Teoh Mao Jian · Canva Portfolio
                            </span>
                          </div>
                          <p className="font-display text-xl font-bold" style={{ color: 'rgba(232,218,188,0.95)' }}>{GALLERY_LABEL}</p>
                          <p className="font-editorial italic text-[13px]" style={{ color: 'rgba(180,158,110,0.60)' }}>{GALLERY_SUBLABEL}</p>
                        </div>
                        <motion.div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 ml-4"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}
                          whileHover={{ scale: 1.14, rotate: 45 }} transition={{ duration: 0.25 }}
                        >
                          <ArrowUpRight className="w-4 h-4" style={{ color: 'rgba(220,200,155,0.80)' }} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-3 flex flex-wrap gap-1.5">
                    {GALLERY_TAGS.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: T.tagBg, color: T.tag, border: `1px solid ${T.tagBd}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </a>
          </motion.div>

          {/* Instagram */}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block">
            <motion.div whileHover={{ scale: 1.010, y: -3 }} transition={{ duration: 0.22 }}>
              <GlassCard rounded="full" className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4" style={{ color: T.rowIcon }} />
                  <span className="font-body text-[14px] font-medium" style={{ color: T.rowText }}>{INSTAGRAM_HANDLE}</span>
                </div>
                <ArrowUpRight className="w-4 h-4" style={{ color: T.rowArr }} />
              </GlassCard>
            </motion.div>
          </a>

          {/* Email */}
          <a href={`mailto:${EMAIL_ADDRESS}`} className="block">
            <motion.div whileHover={{ scale: 1.010, y: -3 }} transition={{ duration: 0.22 }}>
              <GlassCard rounded="full" className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" style={{ color: T.rowIcon }} />
                  <span className="font-body text-[13px] sm:text-[14px] font-medium" style={{ color: T.rowText }}>{EMAIL_ADDRESS}</span>
                </div>
                <ArrowUpRight className="w-4 h-4" style={{ color: T.rowArr }} />
              </GlassCard>
            </motion.div>
          </a>
        </SectionReveal>

        {/* Footer */}
        <motion.div className="text-center mt-20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <div className="h-px w-10 mx-auto mb-6" style={{ background: 'rgba(200,175,120,0.10)' }} />
          <p className="font-mono text-[10px] uppercase tracking-[0.44em]" style={{ color: T.footer }}>
            {FOOTER_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
}