import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const GRADE_COLORS = {
  gold:    { bg: 'rgba(200,175,110,0.22)', color: 'rgba(240,210,120,0.95)',  border: 'rgba(200,170,100,0.35)' },
  green:   { bg: 'rgba(80,180,110,0.18)',  color: 'rgba(110,220,140,0.95)',  border: 'rgba(80,180,110,0.30)' },
  blue:    { bg: 'rgba(90,140,220,0.18)',  color: 'rgba(130,180,255,0.95)',  border: 'rgba(90,140,220,0.30)' },
  neutral: { bg: 'rgba(160,150,140,0.12)', color: 'rgba(190,178,158,0.80)', border: 'rgba(160,150,140,0.22)' },
};

const PERIODS = [
  "S3 WA1",
  "S3 WA2",
  "S3 Overall",
  "S4 WA1",
  "S4 WA2",
];

const SUBJECTS = [
  {
    subject: "English Language",
    grades: [
      { grade: "C5",  color: "blue"    },
      { grade: "B4",  color: "green"   },
      { grade: "B4",  color: "green"   },
      { grade: "C6",  color: "blue"    },
      { grade: "E8",  color: "neutral" },
    ],
  },
  {
    subject: "Higher Chinese",
    grades: [
      { grade: "B3",  color: "green"   },
      { grade: "D7",  color: "neutral" },
      { grade: "B4",  color: "green"   },
      { grade: "C6",  color: "blue"    },
      { grade: "B4",  color: "green"   },
    ],
  },
  {
    subject: "Mathematics",
    grades: [
      { grade: "C6",  color: "blue"    },
      { grade: "E8",  color: "neutral" },
      { grade: "C5",  color: "blue"    },
      { grade: "C6",  color: "blue"    },
      { grade: "B3",  color: "green"   },
    ],
  },
  {
    subject: "Add. Mathematics",
    grades: [
      { grade: "D7",  color: "neutral" },
      { grade: "E8",  color: "neutral" },
      { grade: "D7",  color: "neutral" },
      { grade: "F9",  color: "neutral" },
      { grade: "B4",  color: "green"   },
    ],
  },
  {
    subject: "Physics",
    grades: [
      { grade: "D7",  color: "neutral" },
      { grade: "E8",  color: "neutral" },
      { grade: "D7",  color: "neutral" },
      { grade: "B3",  color: "green"   },
      { grade: "B4",  color: "green"   },
    ],
  },
  {
    subject: "Chemistry",
    grades: [
      { grade: "D7",  color: "neutral" },
      { grade: "E8",  color: "neutral" },
      { grade: "C6",  color: "blue"    },
      { grade: "F9",  color: "neutral" },
      { grade: "B4",  color: "green"   },
    ],
  },
  {
    subject: "Humanities",
    grades: [
      { grade: "C5",  color: "blue"    },
      { grade: "C6",  color: "blue"    },
      { grade: "C5",  color: "blue"    },
      { grade: "C6",  color: "blue"    },
      { grade: "B4",  color: "green"   },
    ],
  },
  {
    subject: "Music",
    grades: [
      { grade: "A1",  color: "gold"    },
      { grade: "A2",  color: "gold"    },
      { grade: "A",   color: "gold"    },
      { grade: "A2",  color: "gold"    },
      { grade: "B4",  color: "green"   },
    ],
  },
];

const S3_OVERALL_EXTRAS = [
  { subject: "Physical Education",         grade: "B",  color: "green"   },
  { subject: "Contemporary China Studies", grade: "A",  color: "gold"    },
  { subject: "CnME",                       grade: "–",  color: "neutral" },
];

const ATTENDANCE = ["91/95", "91/95", "185/191", "46/49", "92/95"];

// ────────────────────────────────────────────────────────────────

export default function AcademicSection() {
  return (
    <GlassCard className="p-4 sm:p-6 overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse">
        <thead>
          <tr>
            <th className="text-left pb-4 pr-4 font-mono text-[10px] uppercase tracking-widest"
              style={{ color: 'rgba(200,180,140,0.60)', width: '32%' }}>
              Subject
            </th>
            {PERIODS.map((p, i) => (
              <th key={p} className="pb-4 px-1 font-mono text-[10px] uppercase tracking-widest text-center"
                style={{ color: 'rgba(200,180,140,0.60)' }}>
                {p}
                <div className="font-mono text-[9px] tracking-wide mt-0.5" style={{ color: 'rgba(180,158,110,0.45)' }}>{ATTENDANCE[i]}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SUBJECTS.map((row, ri) => (
            <motion.tr key={row.subject}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: ri * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="border-t"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <td className="py-2.5 pr-4 font-body text-[13px]" style={{ color: 'rgba(220,205,172,0.90)' }}>
                {row.subject}
              </td>
              {row.grades.map((g, gi) => {
                const c = GRADE_COLORS[g.color] || GRADE_COLORS.neutral;
                return (
                  <td key={gi} className="py-2.5 px-1 text-center">
                    <span className="inline-block font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                      {g.grade}
                    </span>
                  </td>
                );
              })}
            </motion.tr>
          ))}

          {S3_OVERALL_EXTRAS.map((row, ri) => {
            const c = GRADE_COLORS[row.color] || GRADE_COLORS.neutral;
            return (
              <motion.tr key={row.subject}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (SUBJECTS.length + ri) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="border-t"
                style={{ borderColor: 'rgba(255,255,255,0.04)' }}
              >
                <td className="py-2.5 pr-4 font-body text-[13px]" style={{ color: 'rgba(190,175,145,0.72)' }}>
                  {row.subject}
                  <span className="ml-2 font-mono text-[9px]" style={{ color: 'rgba(180,158,110,0.38)' }}>(S3 Overall)</span>
                </td>
                <td /><td />
                <td className="py-2.5 px-1 text-center">
                  <span className="inline-block font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>
                    {row.grade}
                  </span>
                </td>
                <td /><td />
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </GlassCard>
  );
}