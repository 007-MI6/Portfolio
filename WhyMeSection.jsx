import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";

// ─── EDIT ALL TEXT HERE ──────────────────────────────────────────
const EYEBROW   = "Personal Portfolio";
const FULL_NAME = "Teoh Mao Jian";
const TAGLINE   = "Creator · Designer · Investigator";

const ROLES = [
  "Creative",
  "Investigative",
  "Artistic",
  "Adaptive",
];
// ────────────────────────────────────────────────────────────────

export default function SplashSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const nameY     = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const nameScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.84]);
  const nameOp    = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const pillsOp   = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const pillsY    = useTransform(scrollYProgress, [0, 0.4], [0, -35]);
  const eyebrowOp = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const bgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const mx      = useMotionValue(0);
  const my      = useMotionValue(0);
  const springX = useSpring(useTransform(mx, [-1,1], [-8,8]),  { stiffness: 50, damping: 18 });
  const springY = useSpring(useTransform(my, [-1,1], [-5,5]),  { stiffness: 50, damping: 18 });

  const handleMouse = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mx.set(((clientX - left) / width - 0.5) * 2);
    my.set(((clientY - top) / height - 0.5) * 2);
  };

  return (
    <section
      ref={ref}
      id="splash"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 text-center overflow-hidden"
      style={{ paddingTop: '80px' }}
      onMouseMove={handleMouse}
    >
      {/* Ambient radial glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: bgScale, originX: 0.5, originY: 0.5 }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 38%, rgba(190,155,80,0.10) 0%, transparent 70%)',
        }} />
      </motion.div>

      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-5 mb-14"
        style={{ opacity: eyebrowOp }}
        initial={{ opacity: 0, scaleX: 0.4 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="h-px w-14 sm:w-24" style={{ background: 'rgba(200,175,120,0.18)' }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.46em] whitespace-nowrap" style={{ color: 'rgba(200,180,135,0.42)' }}>
          {EYEBROW}
        </span>
        <div className="h-px w-14 sm:w-24" style={{ background: 'rgba(200,175,120,0.18)' }} />
      </motion.div>

      {/* Full name */}
      <motion.div style={{ y: nameY, scale: nameScale, opacity: nameOp, x: springX }}>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-bold leading-[0.95] tracking-tight select-none"
            style={{
              fontSize: 'clamp(3rem, 11vw, 8.5rem)',
              letterSpacing: '-0.025em',
              color: 'rgba(235,220,190,0.95)',
              textShadow: '0 2px 40px rgba(200,160,80,0.15), 0 0 80px rgba(200,160,80,0.06)',
            }}
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
          >
            {FULL_NAME}
          </motion.h1>
        </div>

        <motion.p
          className="font-editorial italic mt-4"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.4rem)', color: 'rgba(180,160,120,0.48)', y: springY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
        >
          {TAGLINE}
        </motion.p>
      </motion.div>

      {/* Role pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mt-10"
        style={{ opacity: pillsOp, y: pillsY }}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.90 } } }}
      >
        {ROLES.map((role) => (
          <motion.span
            key={role}
            variants={{
              hidden: { opacity: 0, y: 14, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-body text-xs sm:text-[13px] px-4 py-1.5 rounded-full font-medium tracking-wide"
            style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(200,175,120,0.20)',
              color: 'rgba(210,190,150,0.80)',
            }}
          >
            {role}
          </motion.span>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: eyebrowOp }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.48em]" style={{ color: 'rgba(180,160,110,0.28)' }}>scroll</span>
        <div className="w-px h-14 origin-top" style={{
          background: 'linear-gradient(to bottom, rgba(200,175,110,0.30), transparent)',
          animation: 'breathe 2.6s ease-in-out infinite',
        }} />
      </motion.div>
    </section>
  );
}