import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const SECTION_LABEL = "03 — Why Choose Me";
const HEADING       = "Why Choose Me?";
const SUBHEADING    = "Three reasons I'll bring something unique to SP's Computer Science programme.";

const REASONS = [
  {
    number: "01",
    title: "Cross-Disciplinary Foundations",
    body: "My background spans Physics, Visual Arts, music, and software — giving me both the analytical rigour and creative intuition to design systems that are not just functional, but beautiful."
  },
  {
    number: "02",
    title: "Builder by Nature",
    body: "From self-teaching Python and Java during Covid-19 to circuit exploration and photography, I don't wait to be taught — I find ways to build, create, and investigate on my own."
  },
  {
    number: "03",
    title: "Goal-Driven & Adaptable",
    body: "I aim to gain deeper insights into the unseen world of electronics in code, and create software that solves real-world problems. My adaptability and drive make me a strong fit for SP's rigorous environment."
  }
];

// ────────────────────────────────────────────────────────────────

const T = {
  label:   'rgba(180,155,100,0.42)',
  heading: 'rgba(232,218,188,0.95)',
  sub:     'rgba(180,158,115,0.45)',
  num:     'rgba(200,165,85,0.12)',
  title:   'rgba(220,205,172,0.90)',
  body:    'rgba(185,170,138,0.65)',
};

export default function WhyMeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="whyme" className="relative z-10 py-6 pb-28 overflow-hidden">
      <motion.div className="absolute inset-0 pointer-events-none" style={{ x: bgX }}>
        <div className="absolute top-1/2 left-[-20%] w-[140%] h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(200,175,120,0.06) 30%, rgba(200,175,120,0.06) 70%, transparent)',
        }} />
      </motion.div>

      <SectionDivider label="Why Me" />

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -9, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <GlassCard className="p-7 h-full">
                <p className="font-display text-5xl font-bold mb-5 leading-none" style={{ color: T.num }}>
                  {r.number}
                </p>
                <h3 className="font-body font-semibold text-[14px] mb-3 tracking-wide" style={{ color: T.title }}>
                  {r.title}
                </h3>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: T.body }}>
                  {r.body}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}