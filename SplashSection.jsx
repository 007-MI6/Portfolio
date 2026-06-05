import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────
const WORDS = [
  "Creative", "Analytical", "Builder", "Photographer",
  "Musician", "Designer", "Investigator", "Developer", "Curious", "Adaptive",
];
// ────────────────────────────────────────────────────────────────

export default function MarqueeStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-28%", "0%"]);
  const repeated = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div
      ref={ref}
      className="relative z-10 py-10 overflow-hidden"
      style={{
        borderTop:    '1px solid rgba(200,175,120,0.07)',
        borderBottom: '1px solid rgba(200,175,120,0.07)',
      }}
    >
      <motion.div className="flex gap-7 mb-3.5 whitespace-nowrap" style={{ x: x1 }}>
        {repeated.map((word, i) => (
          <span key={`a${i}`} className="font-display text-[2.2rem] sm:text-[3.2rem] font-bold select-none"
            style={{
              color: i % 3 === 0 ? 'rgba(225,210,178,0.82)' : 'rgba(200,175,120,0.10)',
              letterSpacing: '-0.03em',
            }}>
            {word}
          </span>
        ))}
      </motion.div>

      <motion.div className="flex gap-7 whitespace-nowrap" style={{ x: x2 }}>
        {[...repeated].reverse().map((word, i) => (
          <span key={`b${i}`} className="font-editorial italic text-[1.8rem] sm:text-[2.5rem] select-none"
            style={{
              color: i % 4 === 0 ? 'rgba(180,155,105,0.28)' : 'rgba(180,155,105,0.07)',
              letterSpacing: '-0.02em',
            }}>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}