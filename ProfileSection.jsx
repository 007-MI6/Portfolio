const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const PORTRAIT_URL = "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/582beef8f_IMG_3460.JPEG";

const SECTION_LABEL = "01 — Personal Statement";
const HEADING       = "About Me";
const SUBHEADING    = "Creator · Designer · Investigator";

const PERSONAL_STATEMENT = `I'm a hands-on creator with deep knowledge in arts, physics and software development. I aspire for a career as a software engineer or tech entrepreneur, optimising systems through problem-solving, and creating engaging user interfaces with my artistic abilities to build valuable tech solutions. I have deep interests in designing and investigating how things work, from tangible mechanisms to the unseen world of computer science. I believe my foundations in coding with Python and C++, strengths in photography and passion for innovation will help me specialise in UX/UI Design in SP.`;

const META_SCHOOL = ["School",    "Nan Hua High School"];
const META_CCA    = ["CCA",       "Symphonic Band"];

// ────────────────────────────────────────────────────────────────

// Dark-theme accent palette
const T = {
  label:   'rgba(180,155,100,0.42)',
  heading: 'rgba(232,218,188,0.95)',
  sub:     'rgba(180,158,115,0.48)',
  body:    'rgba(210,196,168,0.72)',
  meta:    'rgba(160,142,105,0.38)',
  metaVal: 'rgba(215,200,168,0.80)',
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 0.97]);
  const imgY     = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const textX    = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <section ref={ref} id="about" className="relative z-10 py-6 pb-28 overflow-hidden">
      <SectionDivider label="About" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left — Text */}
          <motion.div className="lg:col-span-3 space-y-8" style={{ x: textX }}>
            <SectionReveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.40em] mb-4" style={{ color: T.label }}>
                {SECTION_LABEL}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: T.heading }}>
                {HEADING}
              </h2>
              <p className="font-editorial italic text-xl mt-2" style={{ color: T.sub }}>
                {SUBHEADING}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <GlassCard className="p-7 sm:p-9">
                <p className="font-body text-[14.5px] sm:text-[15px] leading-[1.90] font-light" style={{ color: T.body }}>
                  {PERSONAL_STATEMENT}
                </p>
              </GlassCard>
            </SectionReveal>

            <SectionReveal delay={0.22}>
              <div className="flex items-start gap-8 flex-wrap pt-1">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: T.meta }}>{META_SCHOOL[0]}</p>
                  <p className="font-body text-sm font-semibold" style={{ color: T.metaVal }}>{META_SCHOOL[1]}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: T.meta }}>{META_CCA[0]}</p>
                  <p className="font-body text-sm font-semibold" style={{ color: T.metaVal }}>{META_CCA[1]}</p>
                </div>
              </div>
            </SectionReveal>
          </motion.div>

          {/* Right — Portrait */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative" style={{ width: '280px', maxWidth: '100%' }}>
              <div className="absolute -inset-3 rounded-3xl" style={{
                background: 'radial-gradient(ellipse at 40% 30%, rgba(190,155,80,0.14), transparent 70%)',
                filter: 'blur(20px)',
              }} />
              <GlassCard rounded="3xl" className="overflow-hidden p-1.5">
                <motion.div className="overflow-hidden rounded-2xl" style={{ scale: imgScale }}>
                  <motion.img
                    src={PORTRAIT_URL}
                    alt="Portrait of Teoh Mao Jian"
                    className="w-full aspect-[3/4] object-cover"
                    loading="eager"
                    style={{ y: imgY }}
                    initial={{ scale: 1.08, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}