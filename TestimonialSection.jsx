import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal, { SectionDivider } from "./SectionReveal";
import AcademicSection from "./AcademicSection";
import CoCurriculumSection from "./CoCurriculumSection";
import TestimonialSection from "./TestimonialSection";
import CertificatesSection from "./CertificatesSection";
// ─── EDIT LABELS HERE ────────────────────────────────────────────
const SECTION_LABEL = "04 — Academics";
const HEADING       = "Academics";
const SUBHEADING    = "Academic Results, Co-Curriculum & Testimonial — Sec 3 to Sec 4";

const TABS = [
  { id: "academic",      label: "Academic Results" },
  { id: "cca",           label: "Co-Curriculum" },
  { id: "certificates",  label: "Certificates" },
  { id: "testimonial",   label: "Testimonial" },
];
// ────────────────────────────────────────────────────────────────

export default function ProfileSection() {
  const [active, setActive] = useState("academic");

  return (
    <section id="academics" className="relative z-10 py-6 pb-28">
      <SectionDivider label="Academics" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionReveal className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.40em] mb-4" style={{ color: 'rgba(180,155,100,0.42)' }}>
            {SECTION_LABEL}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1]" style={{ color: 'rgba(232,218,188,0.95)' }}>
            {HEADING}
          </h2>
          <p className="font-editorial italic text-xl mt-2" style={{ color: 'rgba(180,158,115,0.48)' }}>
            {SUBHEADING}
          </p>
        </SectionReveal>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-8 p-1 rounded-full w-fit overflow-x-auto"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="relative font-body text-[12px] sm:text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
              style={{ color: active === tab.id ? 'rgba(232,218,188,0.95)' : 'rgba(180,158,110,0.48)' }}
            >
              {active === tab.id && (
                <motion.div layoutId="tab-bg" className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(200,165,85,0.12)', border: '1px solid rgba(200,165,85,0.22)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {active === "academic"      && <AcademicSection />}
            {active === "cca"           && <CoCurriculumSection />}
            {active === "certificates"  && <CertificatesSection />}
            {active === "testimonial"   && <TestimonialSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}