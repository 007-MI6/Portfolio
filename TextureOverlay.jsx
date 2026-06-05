import { motion } from "framer-motion";

// ─── SectionReveal ────────────────────────────────────────────────
export default function SectionReveal({ children, className = "", delay = 0, dir = "up" }) {
  const hidden = {
    up:    { opacity: 0, y: 32,  filter: "blur(5px)" },
    left:  { opacity: 0, x: -32, filter: "blur(5px)" },
    right: { opacity: 0, x: 32,  filter: "blur(5px)" },
    scale: { opacity: 0, scale: 0.94, filter: "blur(5px)" },
  }[dir] || { opacity: 0, y: 32, filter: "blur(5px)" };

  const visible = {
    up:    { opacity: 1, y: 0,  filter: "blur(0px)" },
    left:  { opacity: 1, x: 0,  filter: "blur(0px)" },
    right: { opacity: 1, x: 0,  filter: "blur(0px)" },
    scale: { opacity: 1, scale: 1, filter: "blur(0px)" },
  }[dir] || { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.80, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── SectionDivider ───────────────────────────────────────────────
export function SectionDivider({ label }) {
  return (
    <motion.div
      className="flex items-center gap-5 max-w-6xl mx-auto px-5 sm:px-8 mb-14"
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex-1 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(200,175,120,0.18) 40%, rgba(200,175,120,0.18) 60%, transparent)',
      }} />
      <span className="font-mono text-[10px] uppercase tracking-[0.50em] shrink-0" style={{ color: 'rgba(180,155,100,0.38)' }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{
        background: 'linear-gradient(90deg, rgba(200,175,120,0.18), transparent)',
      }} />
    </motion.div>
  );
}