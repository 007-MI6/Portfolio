const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────
// All certificates — images shown in full. No titles displayed in the gallery.
// Lightbox will show title/issuer if present.

const CERTIFICATES = [

// ── 2025 ──────────────────────────────────────────────────────
{
  year: "2025",
  title: "Singapore-Cambridge GCE O-Level — Chinese A, Chinese Oral Distinction",
  issuer: "Ministry of Education Singapore & Cambridge International Education",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/66405ab43_CamScanner2026-5-301119_20.jpg"
},
{
  year: "2025",
  title: "STEM Playground 2025 — Certificate of Accomplishment (Challenge 2: Slow Descent Helicopter)",
  issuer: "Science Centre Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/be7e74b00_CamScanner2026-5-301106_1.jpg"
},

// ── 2024 ──────────────────────────────────────────────────────
{
  year: "2024",
  title: "Edusave Certificate of Academic Achievement 2024 — Secondary 2, Nan Hua High School",
  issuer: "Ministry of Education Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/cd9b16296_CamScanner2026-5-301119_19.jpg"
},
{
  year: "2024",
  title: "CCC–CDC Education Merit Award 2024 — Secondary 2, Nan Hua High School",
  issuer: "People's Association & South West CDC",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/1c80f99c6_CamScanner2026-5-301119_18.jpg"
},
{
  year: "2024",
  title: "STEM Playground 2024 — Certificate of Accomplishment (Challenge 2: Support The Mass!)",
  issuer: "Science Centre Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/42fcf2fce_CamScanner2026-5-301106_2.jpg"
},
{
  year: "2024",
  title: "STEM Playground 2024 — Certificate of Accomplishment (Challenge 1: How Far Reel It Move?)",
  issuer: "Science Centre Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/df5a05acf_CamScanner2026-5-301106_3.jpg"
},

// ── 2023 ──────────────────────────────────────────────────────
{
  year: "2023",
  title: "STEM Playground 2023 — Certificate of Accomplishment (Challenge 2: \"Sea-rious\" Challenger)",
  issuer: "Science Centre Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/cf3658761_CamScanner2026-5-301106_4.jpg"
},
{
  year: "2023",
  title: "STEM Playground 2023 — Certificate of Accomplishment (Challenge 1: CanBridge Hold'em)",
  issuer: "Science Centre Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/6e5affc0e_CamScanner2026-5-301106_5.jpg"
},

// ── 2022 ──────────────────────────────────────────────────────
{
  year: "2022",
  title: "Primary School Leaving Examination Certificate — Frontier Primary School",
  issuer: "Ministry of Education Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/38ecba6d9_CamScanner2026-5-301119_17.jpg"
},
{
  year: "2022",
  title: "Edusave Certificate of Academic Achievement 2022 — Primary 6, Frontier Primary School",
  issuer: "Ministry of Education Singapore",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/b23fa0934_CamScanner2026-5-301119_16.jpg"
},
{
  year: "2022",
  title: "Kumon Certificate of Excellence — 3 Years Ahead of International Standard (Mathematics, Primary 6)",
  issuer: "Kumon Asia & Oceania",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/1bfff8f47_CamScanner2026-5-301119_15.jpg"
},
{
  year: "2022",
  title: "Raffles Institution Primary Mathematics World Contest 2022 — Round 1 Open Category",
  issuer: "Raffles Institution",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/110631f9a_CamScanner2026-5-301119_14.jpg"
},
{
  year: "2022",
  title: "Singapore Mathematical Olympiad for Primary Schools — Participation",
  issuer: "Hwa Chong Institution",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/6684df544_CamScanner2026-5-301119_13.jpg"
},

// ── 2021 ──────────────────────────────────────────────────────
{
  year: "2021",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/79e8c6b92_CamScanner2026-5-301119_12.jpg"
},
{
  year: "2021",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/e7a9938c2_CamScanner2026-5-301119_11.jpg"
},
{
  year: "2021",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/4d2d13445_CamScanner2026-5-301119_10.jpg"
},
{
  year: "2021",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/597584e75_CamScanner2026-5-301119_9.jpg"
},
{
  year: "2021",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/7fd1744e1_CamScanner2026-5-301119_8.jpg"
},

// ── 2020 ──────────────────────────────────────────────────────
{
  year: "2020",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/8feaf8097_CamScanner2026-5-301119_7.jpg"
},
{
  year: "2020",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/6fb60f45b_CamScanner2026-5-301119_6.jpg"
},

// ── 2019 ──────────────────────────────────────────────────────
{
  year: "2019",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/19db0dd60_CamScanner2026-5-301119_5.jpg"
},
{
  year: "2019",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/3efdd6a30_CamScanner2026-5-301119_4.jpg"
},

// ── 2018 ──────────────────────────────────────────────────────
{
  year: "2018",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/ab7052847_CamScanner2026-5-301119_3.jpg"
},
{
  year: "2018",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/f31485b7e_CamScanner2026-5-301119_2.jpg"
},
{
  year: "2018",
  image: "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/15bd8b19c_CamScanner2026-5-301119_1.jpg"
},

// ── 2017 — add images here following the same format ──────────
];
// ────────────────────────────────────────────────────────────────

function groupByYear(certs) {
  return certs.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {});
}

export default function CertificatesSection() {
  const [lightbox, setLightbox] = useState(null);
  const grouped = groupByYear(CERTIFICATES);
  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <>
      <div className="space-y-8">
        {years.map((year, yi) => {
          const certs = grouped[year];
          return (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: yi * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Year label */}
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.38em]"
                  style={{ color: 'rgba(200,175,120,0.65)' }}>
                  {year}
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                <span className="font-mono text-[10px]" style={{ color: 'rgba(180,158,110,0.35)' }}>
                  {certs.length} cert{certs.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Horizontal scroll row — 4 items visible, scroll for more */}
              <div
                className="flex gap-3 overflow-x-auto pb-2"
                style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {certs.map((cert, ci) => (
                  <button
                    key={ci}
                    onClick={() => setLightbox(cert)}
                    className="shrink-0 cursor-zoom-in rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.03] hover:brightness-110"
                    style={{
                      // 4 items visible: calc(25% - gap). On mobile 2 items.
                      width: 'calc(25% - 9px)',
                      minWidth: '140px',
                      scrollSnapAlign: 'start',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div style={{ paddingBottom: '130%', position: 'relative' }}>
                      <img
                        src={cert.image}
                        alt="Certificate"
                        loading="lazy"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ backdropFilter: 'blur(24px)', background: 'rgba(8,8,10,0.80)' }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt="Certificate"
                className="w-full rounded-2xl shadow-2xl"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
              {(lightbox.title || lightbox.issuer) && (
                <div className="mt-3 text-center px-2">
                  {lightbox.title && (
                    <p className="font-body text-[13px] font-semibold leading-snug" style={{ color: 'rgba(232,218,188,0.92)' }}>
                      {lightbox.title}
                    </p>
                  )}
                  {lightbox.issuer && (
                    <p className="font-mono text-[10px] mt-1" style={{ color: 'rgba(180,158,110,0.60)' }}>
                      {lightbox.issuer} · {lightbox.year}
                    </p>
                  )}
                </div>
              )}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                <X className="w-4 h-4 text-white/80" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}