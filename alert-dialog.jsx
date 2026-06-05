import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionReveal from "./SectionReveal";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const STUDENT_NAME = "TEOH MAO JIAN";

const PARAGRAPHS = [
  "Teoh Mao Jian was a student in Nan Hua High School from 2023 to 2026.",
  "Mao Jian demonstrated consistent academic interest and curiosity throughout his time at school. His active participation in various enrichment programmes, such as Camp Vigour and the Annual Road Run, showcased his enthusiasm for learning beyond the classroom. These activities allowed him to explore diverse topics and develop a broader perspective. His involvement in the Sec 1 October Learning Fest Game On! further reflected his eagerness to engage in interactive and collaborative learning experiences.",
  "As a dedicated member of the Concert Band, Mao Jian contributed significantly to his CCA over four years. He served as the Upper Secondary Section Leader in 2026, demonstrating leadership and commitment to the team. His musical talent and dedication were evident in his participation in numerous events, including the National Day Celebrations, Cultural Potpourri, and Speech and Prize Giving Day. Notably, he represented the school at the Singapore Youth Festival Arts Presentation in 2025, where the band achieved a Certificate of Distinction. His involvement in the Limelight Series Concert at Esplanade further highlighted his ability to perform at prestigious venues, inspiring his peers and enriching the school's cultural environment.",
  "Mao Jian actively participated in Values in Action (VIA) projects, contributing to both school-based and community-focused initiatives. His involvement in the Sec 4 Camp Horizon VIA in 2026 demonstrated his commitment to engaging with seniors from active ageing centres through meaningful activities. In 2025, he participated in the Mid-Autumn Festival Charity Drive, organising booths and games to raise funds for charity organisations.",
  "His contributions to environmental projects, such as Food Waste Management and Growing Edibles in 2023, reflected his awareness of sustainability and his willingness to make a positive impact. These experiences allowed him to develop a sense of responsibility and empathy for different communities.",
  "Mao Jian consistently displayed exemplary personal qualities, including graciousness, teamwork, and integrity. His interactions with peers and teachers were marked by respect and thoughtfulness, fostering a positive and inclusive environment. He demonstrated strong creativity and curiosity, often seeking innovative ways to approach challenges and deepen his understanding. His self-regulation and cultural versatility further enabled him to adapt to diverse situations and collaborate effectively with others. These traits were evident in his leadership roles and his ability to contribute meaningfully to group efforts.",
  "Mao Jian is poised to embrace future challenges with confidence and determination. His dedication, leadership, and compassion will undoubtedly enable him to make meaningful contributions in his future endeavours.",
];

const HIGHLIGHTS = [
  "Upper Sec Section Leader 2026",
  "SYF Arts Presentation 2025 — Certificate of Distinction",
  "Esplanade Limelight Series",
  "VIA — Camp Horizon 2026",
  "Mid-Autumn Charity Drive 2025",
];

// ────────────────────────────────────────────────────────────────

export default function TestimonialSection() {
  return (
    <SectionReveal delay={0.1}>
      <GlassCard className="p-8 sm:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(200,180,140,0.55)' }}>
              Teacher's Testimonial · Nan Hua High School 2026
            </p>
            <p className="font-display text-2xl font-semibold tracking-tight" style={{ color: 'rgba(232,218,188,0.95)' }}>
              {STUDENT_NAME}
            </p>
          </div>
          <div className="ml-auto font-display text-7xl leading-none select-none" style={{ color: 'rgba(200,175,120,0.15)' }}>
            "
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-5">
          {PARAGRAPHS.map((para, i) => (
            <motion.p
              key={i}
              className="font-body text-[14px] sm:text-[15px] leading-[1.88] font-light"
              style={{ color: 'rgba(205,190,158,0.85)' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Chips */}
        <div className="mt-10 pt-8 flex flex-wrap gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {HIGHLIGHTS.map((h) => (
            <span key={h} className="font-mono text-[10px] px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(200,175,110,0.10)', color: 'rgba(210,190,148,0.75)', border: '1px solid rgba(200,170,100,0.20)' }}>
              {h}
            </span>
          ))}
        </div>
      </GlassCard>
    </SectionReveal>
  );
}