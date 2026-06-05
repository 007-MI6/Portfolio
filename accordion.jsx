import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, GitBranch, Palette, Compass } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionReveal, { SectionDivider } from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const SECTION_LABEL = "01 — Strengths";
const HEADING       = "Strengths & Interests";

const STRENGTHS = [
  {
    icon: Cpu,
    title: "Problem Solving",
    sub: "Adaptive Thinking",
    description: "Constantly adapting to changes, overcoming obstacles and finding efficient and effective solutions.",
    elaboration: "During STEM Playground 2023–2025, I tackled open-ended engineering challenges — designing a slow-descent helicopter, building a bridge structure under load constraints, and engineering a distance-maximising reel — all under time pressure. At Frontier Primary, I joined Robotics CCA and later self-taught Python, Java, and Web Design entirely on my own during Covid-19 because I wanted to solve real problems digitally. In Secondary school, my Physics and Add Math grades improved significantly between WA1 and WA2 in Sec 4, reflecting my ability to adapt strategy and push through difficulty.",
  },
  {
    icon: GitBranch,
    title: "Logical Thinking",
    sub: "Analytical Depth",
    description: "Structured thinking, understanding deep concepts with analytical views and asking questions.",
    elaboration: "Competing in the Singapore Primary Science Olympiad (Silver, 2021) and Raffles Institution Primary Mathematics World Contest required structured analytical reasoning beyond classroom level. My Top in Level achievement for Music in Sec 3 demonstrates that I apply the same systematic approach to every discipline — breaking down complex structures, whether code, musical notation, or scientific models, into understandable parts. I was also 3 years ahead of Kumon's international standard in Mathematics by Primary 6.",
  },
  {
    icon: Palette,
    title: "Artistic Capabilities",
    sub: "Form & Proportion",
    description: "Strong instincts for visual balance, geometric proportion, spatial margin, and colour contrast theory.",
    elaboration: "I take Elective Music as a subject in secondary school and have developed a trained ear and understanding of musical structure and expression. My photography practice — started in Sec 2 — reflects a careful eye for composition, framing and tonal control. I apply these same aesthetic principles when designing interfaces: choosing type hierarchies, spacing systems, and colour palettes that communicate clearly. This cross-over between musical arts and digital design is exactly what UX/UI work demands, and it is where my artistic training most directly supports my Computer Science ambitions.",
  },
  {
    icon: Compass,
    title: "Core Interests",
    sub: "Cross-Disciplinary Curiosity",
    description: "Deep curiosity spanning software, hardware, photography, music, and visual arts.",
    elaboration: "From violin studies at age 8 (Stella Violin Programme) to Symphonic Band at Nan Hua, from Robotics in primary school to self-learning C++ on Codecademy, my interests span an unusually wide range. I believe this breadth — not despite, but because of its variety — makes me a stronger Computer Science candidate. Great software products require empathy, creativity, and technical depth simultaneously. My foundation in arts, science, music, and coding gives me all three, and SP's Computer Science programme is where I want to unify them into meaningful technology.",
  },
];

// ────────────────────────────────────────────────────────────────

const T = {
  label:   'rgba(180,155,100,0.42)',
  heading: 'rgba(232,218,188,0.95)',
  sub:     'rgba(180,158,115,0.45)',
  body:    'rgba(195,180,148,0.62)',
  elab:    'rgba(205,190,158,0.72)',
};
const AC    = 'rgba(195,165,95,0.78)';
const AC_BG = 'rgba(200,165,85,0.08)';
const AC_BD = 'rgba(200,165,85,0.18)';

export default function StrengthsSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="strengths" className="relative z-10 py-6 pb-28 overflow-hidden">
      <SectionDivider label="Strengths" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionReveal className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.40em] mb-4" style={{ color: T.label }}>
            {SECTION_LABEL}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: T.heading }}>
            {HEADING}
          </h2>
          <p className="font-body text-sm mt-3" style={{ color: T.sub }}>Click any card to learn more.</p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRENGTHS.map((item, i) => {
            const Icon = item.icon;
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                layout
              >
                <button onClick={() => setExpanded(isExpanded ? null : i)} className="w-full text-left">
                  <motion.div
                    whileHover={isExpanded ? {} : { y: -9, scale: 1.022 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <GlassCard
                      className="p-6 h-full"
                      style={{
                        border: isExpanded ? '1px solid rgba(195,165,95,0.30)' : undefined,
                        boxShadow: isExpanded ? '0 0 0 1px rgba(195,165,95,0.10) inset, 0 12px 48px rgba(0,0,0,0.40)' : undefined,
                      }}
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: AC_BG, border: `1px solid ${AC_BD}` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color: AC }} />
                        </div>
                        <motion.span
                          animate={{ rotate: isExpanded ? 45 : 0 }}
                          transition={{ duration: 0.22 }}
                          className="text-[16px] leading-none mt-0.5"
                          style={{ color: AC }}
                        >
                          +
                        </motion.span>
                      </div>

                      <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: 'rgba(180,155,90,0.45)' }}>
                        {item.sub}
                      </p>
                      <h3 className="font-body font-semibold text-[13.5px] mb-2.5 tracking-wide" style={{ color: T.heading }}>
                        {item.title}
                      </h3>
                      <p className="font-body text-[12px] leading-relaxed" style={{ color: T.body }}>
                        {item.description}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3.5" style={{ borderTop: '1px solid rgba(200,175,120,0.10)' }}>
                              <p className="font-body text-[12px] leading-relaxed" style={{ color: T.elab }}>
                                {item.elaboration}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlassCard>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}