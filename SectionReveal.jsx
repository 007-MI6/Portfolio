import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Music, Code2, Globe } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const SECTION_LABEL = "00 — Background";
const HEADING       = "My Journey";
const SUBHEADING    = "From Penang to Singapore — a path of curiosity and craft.";

const TIMELINE = [
  {
    period: "2010",
    title: "Born in Penang, Malaysia",
    desc: "Grew up in Penang, Malaysia, developing an early curiosity for how things work — from machines to music.",
    tags: ["Penang", "Malaysia"],
    icon: Globe,
  },
  {
    period: "2017 – 2022",
    title: "Frontier Primary School",
    desc: "Joined Robotics and Media CCA, developing strong interests in technology and sciences. During the Covid-19 period, self-taught Python, Java, and Web Design through Udemy.",
    tags: ["Robotics", "Media", "Python", "Java", "Web Design", "Udemy"],
    icon: Code2,
  },
  {
    period: "2023 – Present",
    title: "Nan Hua High School",
    desc: "Joined Symphonic Band CCA and developed strong interests in arts and music. Started learning photography in Secondary 2. Discovered talents in building and creating art and software. Learnt basic C++ from Codecademy. Achieved Top in Level for Music in Secondary 3.",
    tags: ["Symphonic Band", "Photography", "C++", "Codecademy", "Top in Level — Music"],
    icon: Music,
  },
];

// Skills — change label and pct (0–100) for each bar
const SKILLS = [
  { label: "Visual Design & UX",  pct: 65 },
  { label: "Python",              pct: 52 },
  { label: "C++",                 pct: 58 },
  { label: "Photography",         pct: 80 },
  { label: "Problem Solving",     pct: 90 },
  { label: "Music",               pct: 75 },
];

const QUOTE        = `"Gain deeper insights into the unseen world of electronics in code and pursue a career as software engineer or tech product manager."`;
const QUOTE_AUTHOR = "— Teoh Mao Jian";

// ────────────────────────────────────────────────────────────────

const T = {
  label:   'rgba(180,155,100,0.42)',
  heading: 'rgba(232,218,188,0.95)',
  sub:     'rgba(180,158,115,0.45)',
  body:    'rgba(200,185,155,0.65)',
  tag:     'rgba(180,160,115,0.50)',
  tagBg:   'rgba(200,175,120,0.07)',
  tagBd:   'rgba(200,175,120,0.14)',
};
const AC     = 'rgba(195,165,95,0.75)';
const AC_BG  = 'rgba(200,165,85,0.08)';
const AC_BD  = 'rgba(200,165,85,0.18)';

export default function JourneySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.75], ["0%", "100%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section ref={ref} id="journey" className="relative z-10 py-6 pb-28 overflow-hidden">
      <SectionDivider label="Journey" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionReveal className="mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Timeline */}
          <div className="lg:col-span-3 relative">
            <div className="absolute left-5 top-5 bottom-0 w-px overflow-hidden" style={{ background: 'rgba(200,175,120,0.07)' }}>
              <motion.div className="w-full" style={{
                height: lineH,
                background: 'linear-gradient(to bottom, rgba(195,165,95,0.50), rgba(195,165,95,0.06))',
              }} />
            </div>

            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-5"
                  initial={{ opacity: 0, x: -24, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 relative z-10"
                      style={{ background: AC_BG, border: `1px solid ${AC_BD}` }}>
                      <Icon className="w-4 h-4" style={{ color: AC }} />
                    </div>
                  </div>

                  <div className="pb-12 flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] px-2.5 py-0.5 rounded-md inline-block mb-2.5"
                      style={{ background: AC_BG, color: AC, border: `1px solid ${AC_BD}` }}>
                      {item.period}
                    </span>
                    <h3 className="font-body font-semibold text-[15px] leading-snug mb-2" style={{ color: T.heading }}>
                      {item.title}
                    </h3>
                    <p className="font-body text-[13.5px] leading-relaxed mb-3.5" style={{ color: T.body }}>
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                          style={{ background: T.tagBg, color: T.tag, border: `1px solid ${T.tagBd}` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills card */}
          <div className="lg:col-span-2">
            <motion.div className="sticky top-24" style={{ y: cardY }}>
              <SectionReveal delay={0.25}>
                <GlassCard className="p-7">
                  <h3 className="font-body font-semibold text-[12px] uppercase tracking-widest mb-7" style={{ color: T.label }}>
                    Proficiency
                  </h3>
                  <div className="space-y-5">
                    {SKILLS.map((skill, i) => (
                      <div key={skill.label}>
                        <div className="flex justify-between mb-2">
                          <span className="font-body text-[13px] font-medium" style={{ color: 'rgba(215,200,168,0.82)' }}>{skill.label}</span>
                          <span className="font-mono text-[11px]" style={{ color: T.label }}>{skill.pct}%</span>
                        </div>
                        <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, rgba(195,165,95,0.70), rgba(220,190,120,0.45))' }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-7" style={{ borderTop: '1px solid rgba(200,175,120,0.08)' }}>
                    <p className="font-editorial italic text-[14px] leading-relaxed" style={{ color: 'rgba(180,158,110,0.58)' }}>
                      {QUOTE}
                    </p>
                    <p className="font-mono text-[10px] mt-3" style={{ color: 'rgba(160,138,90,0.32)' }}>
                      {QUOTE_AUTHOR}
                    </p>
                  </div>
                </GlassCard>
              </SectionReveal>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}