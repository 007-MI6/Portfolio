import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const ATTAINMENT_OVERALL = "FAIR";
const ATTAINMENT_LEVELS = [
  { label: "Leadership",     value: "–" },
  { label: "Achievement",    value: "3" },
  { label: "Participation",  value: "4" },
  { label: "Service",        value: "5" },
];

const CCA_NAME   = "Symphonic Band";
const CCA_YEARS  = "2023 – 2026";
const CCA_LEVEL  = "Level 4";
const CCA_ROLE   = "Upper Sec Section / Group Leader (2026)";

const LEADERSHIP = [
  { org: "Symphonic Band", role: "Upper Sec Section/Group Leader", year: "2026" },
];

const ENRICHMENT = [
  { area: "Physical Activities & Sports", activity: "Annual Road Run",             year: "2025" },
  { area: "Physical Activities & Sports", activity: "Camp Vigour",                 year: "2025" },
  { area: "Physical Activities & Sports", activity: "Healthy Habits Sports Carnival", year: "2025" },
  { area: "Physical Activities & Sports", activity: "Annual Road Run 2024",        year: "2024" },
  { area: "Physical Activities & Sports", activity: "Camp Fortitude",              year: "2024" },
  { area: "Physical Activities & Sports", activity: "Healthy Habits Sports Carnival", year: "2024" },
  { area: "Physical Activities & Sports", activity: "Annual Road Run 2023",        year: "2023" },
  { area: "Physical Activities & Sports", activity: "Healthy Habits Sports Carnival", year: "2023" },
  { area: "Physical Activities & Sports", activity: "Sec 1 October Learning Fest Game On!", year: "2023" },
];

const ACHIEVEMENTS = [
  { cca: "Symphonic Band", event: "Singapore Youth Festival Arts Presentation — Concert Band", involvement: "Represented School at SYF Arts Presentation · Certificate of Distinction", year: "2025", level: "3" },
  { cca: "Symphonic Band", event: "Cultural Potpourri",          involvement: "Represented School at Local Event",  year: "2025", level: "3" },
  { cca: "Symphonic Band", event: "Speech and Prize Giving Day", involvement: "Represented CCA at Intra-School Event", year: "2025", level: "1" },
  { cca: "Symphonic Band", event: "National Day Celebrations",   involvement: "Represented CCA at Intra-School Event", year: "2025", level: "1" },
  { cca: "Symphonic Band", event: "Limelight Series Concert at Esplanade", involvement: "Represented School at Local Event", year: "2024", level: "2" },
  { cca: "Symphonic Band", event: "Cultural Potpourri",          involvement: "Represented School at Local Event",  year: "2024", level: "2" },
  { cca: "Symphonic Band", event: "Speech and Prize Giving Day", involvement: "Represented CCA at Intra-School Event", year: "2024", level: "1" },
  { cca: "Symphonic Band", event: "National Day Celebrations",   involvement: "Represented CCA at Intra-School Event", year: "2024", level: "1" },
  { cca: "Symphonic Band", event: "National Day Celebrations",   involvement: "Represented CCA at Intra-School Event", year: "2023", level: "1" },
];

const SERVICE = [
  { type: "Activity",   title: "Sec 4 Camp Horizon VIA",      org: "–",      role: "Participant", hours: "2",  year: "2026" },
  { type: "Project",    title: "Popiah",                       org: "–",      role: "Participant", hours: "9",  year: "2025" },
  { type: "Project",    title: "Mid-Autumn Festival Charity Drive 2025", org: "–", role: "Participant", hours: "6", year: "2025" },
  { type: "Project",    title: "Home Visits",                  org: "SASCO",  role: "Participant", hours: "3",  year: "2024" },
  { type: "Project",    title: "Mid Autumn Festival (MAF)",    org: "–",      role: "Participant", hours: "5",  year: "2024" },
  { type: "Project",    title: "Food Waste Management",        org: "–",      role: "Participant", hours: "1",  year: "2023" },
  { type: "Project",    title: "Growing Edibles",              org: "–",      role: "Participant", hours: "3",  year: "2023" },
  { type: "Project",    title: "Home-Based VIA 2023",          org: "–",      role: "Participant", hours: "3",  year: "2023" },
];

const SERVICE_TOTAL_HOURS = "32";
const SERVICE_TOTAL_LEVEL = "5";

// ────────────────────────────────────────────────────────────────

const CHIP = ({ children, highlight }) => (
  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
    style={highlight ? {
      background: 'rgba(200,175,110,0.20)', color: 'rgba(240,210,120,0.90)', border: '1px solid rgba(200,170,100,0.30)'
    } : {
      background: 'rgba(255,255,255,0.06)', color: 'rgba(190,175,145,0.75)', border: '1px solid rgba(255,255,255,0.09)'
    }}>
    {children}
  </span>
);

export default function CoCurriculumSection() {
  return (
    <div className="space-y-8">

      {/* Attainment summary */}
      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(200,180,140,0.55)' }}>
              Co-Curricular Attainment
            </p>
            <p className="font-display text-2xl font-semibold" style={{ color: 'rgba(232,218,188,0.95)' }}>
              {ATTAINMENT_OVERALL}
            </p>
          </div>
          <div className="flex gap-5 flex-wrap">
            {ATTAINMENT_LEVELS.map(a => (
              <div key={a.label} className="text-center">
                <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: 'rgba(180,158,110,0.50)' }}>{a.label}</p>
                <p className="font-display text-xl font-bold" style={{ color: 'rgba(232,218,188,0.90)' }}>{a.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CCA */}
        <div className="flex items-center gap-4 flex-wrap pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex-1">
            <p className="font-body text-[15px] font-semibold" style={{ color: 'rgba(232,218,188,0.92)' }}>{CCA_NAME}</p>
            <p className="font-body text-[12px] mt-0.5" style={{ color: 'rgba(190,175,145,0.72)' }}>{CCA_YEARS} · {CCA_ROLE}</p>
          </div>
          <CHIP highlight>{CCA_LEVEL}</CHIP>
        </div>
      </GlassCard>

      {/* Achievements */}
      <GlassCard className="p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] mb-5" style={{ color: 'rgba(200,180,140,0.60)' }}>
          Achievements
        </p>
        <div className="space-y-3.5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={i}
              className="flex items-start justify-between gap-3"
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <div className="flex-1">
                <p className="font-body text-[13px] font-medium leading-snug" style={{ color: 'rgba(220,205,172,0.90)' }}>{a.event}</p>
                <p className="font-body text-[11.5px] mt-0.5" style={{ color: 'rgba(185,170,138,0.65)' }}>{a.involvement}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 mt-0.5">
                <CHIP>{a.year}</CHIP>
                <CHIP highlight>Lv {a.level}</CHIP>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Service / VIA */}
      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.38em]" style={{ color: 'rgba(200,180,140,0.60)' }}>
            Values in Action (VIA)
          </p>
          <div className="flex gap-2">
            <CHIP>Total {SERVICE_TOTAL_HOURS} hrs</CHIP>
            <CHIP highlight>Level {SERVICE_TOTAL_LEVEL}</CHIP>
          </div>
        </div>
        <div className="space-y-2.5">
          {SERVICE.map((s, i) => (
            <motion.div key={i}
              className="flex items-center justify-between gap-3"
              initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <span className="font-body text-[13px]" style={{ color: 'rgba(215,200,168,0.82)' }}>{s.title}</span>
              <div className="flex items-center gap-2 shrink-0">
                <CHIP>{s.hours}h</CHIP>
                <CHIP>{s.year}</CHIP>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Enrichment */}
      <GlassCard className="p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.38em] mb-5" style={{ color: 'rgba(200,180,140,0.60)' }}>
          Enrichment
        </p>
        <div className="flex flex-wrap gap-2">
          {ENRICHMENT.map((e, i) => (
            <span key={i} className="font-body text-[12px] px-3 py-1.5 rounded-full flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(210,195,162,0.80)', border: '1px solid rgba(255,255,255,0.09)' }}>
              {e.activity}
              <span className="font-mono text-[9px]" style={{ color: 'rgba(180,158,110,0.45)' }}>{e.year}</span>
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}