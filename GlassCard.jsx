const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

// ─── BACKGROUND CONTEXT — edit this to keep the AI up to date ────────────────
const CONTEXT = `
You are an AI assistant representing Teoh Mao Jian's personal portfolio. Answer questions about him concisely and warmly. Here is everything you know about him:

NAME: Teoh Mao Jian (张茂健)
DOB/ORIGIN: Born 2010 in Penang, Malaysia. Currently living in Singapore.
CURRENT SCHOOL: Nan Hua High School (Secondary 4, 2026)
PREVIOUS SCHOOL: Frontier Primary School (2017–2022)
CCA: Symphonic Band at Nan Hua High School
ASPIRATION: Software engineer or tech entrepreneur, specialising in UX/UI Design. Applying to SP (Singapore Polytechnic) Computer Science programme.

PERSONALITY TRAITS: Creative, Investigative, Artistic, Adaptive.

PERSONAL STATEMENT: Hands-on creator with deep knowledge in arts, physics, and software development. Aspires to a career as a software engineer or tech entrepreneur, optimising systems through problem-solving and creating engaging UIs with artistic abilities. Deep interests in designing and investigating how things work. Foundations in Python and C++, strengths in photography, passion for innovation.

ACADEMIC RESULTS (Secondary):
- Sec 3 WA1: English C5, Higher Chinese B3, Math C6, Add Math D7, Physics D7, Chemistry D7, Humanities C5, Music A1
- Sec 3 WA2: English B4, Higher Chinese D7, Math E8, Add Math E8, Physics E8, Chemistry E8, Humanities C6, Music A2
- Sec 3 Overall: English B4, Higher Chinese B4, Math C5, Add Math D7, Physics D7, Chemistry C6, Humanities C5, Music A, PE B, CCS A, CnME –
- Sec 4 WA1: English C6, Higher Chinese C6, Math C6, Add Math F9, Physics B3, Chemistry F9, Humanities C6, Music A2
- Sec 4 WA2: English E8, Higher Chinese B4, Math B3, Add Math B4, Physics B4, Chemistry B4, Humanities B4, Music B4
Top strength: Music (consistently A-grade). Improving significantly in Sciences and Math by Sec 4.

PRIMARY RESULTS (PSLE 2022): English AL2, Mathematics AL3, Science AL2, Chinese AL3, Higher Chinese Merit.

SKILLS & PROFICIENCY:
- Visual Design & UX: 65%
- Python: 52%
- C++: 58%
- Photography: 80%
- Problem Solving: 90%
- Music: 75%

JOURNEY TIMELINE:
- 2010: Born in Penang, Malaysia
- 2017–2022: Frontier Primary School — Robotics and Media CCA. Self-taught Python, Java, Web Design via Udemy during Covid-19.
- 2023–Present: Nan Hua High School — Symphonic Band. Learned photography in Sec 2. Achieved Top in Level for Music in Sec 3. Learning C++ via Codecademy.

CO-CURRICULUM & ACHIEVEMENTS:
- Symphonic Band CCA (Nan Hua High School)
- STEM Playground 2025: Slow Descent Helicopter (Science Centre Singapore)
- STEM Playground 2024: Support The Mass! & How Far Reel It Move?
- STEM Playground 2023: Sea-rious Challenger & CanBridge Hold'em
- Top in Level — Music, Sec 3
- Singapore Primary Science Olympiad 2021 — Silver (NUS High School)
- KooBits Top Brain Math Silver Award 2021
- Kumon 3 Years Ahead of International Standard (Math, P6, 2022)
- Kumon 6 Months Ahead (Math, P5, 2021)
- Singapore Mathematical Olympiad for Primary Schools — Participation (2022)
- Raffles Institution Primary Mathematics World Contest 2022

AWARDS & EDUSAVE:
- Edusave Certificate of Academic Achievement: 2018 (P2), 2019 (P3), 2020 (P4), 2022 (P6), 2024 (Sec 2)
- Edusave Scholarship 2021 (P5)
- Edusave Good Progress Award 2018 (P2)
- CCC–CDC / CDC–CCC Education Merit Award: 2019, 2020, 2024
- Frontier Learner Award 2021
- O-Level Early Result: Chinese A, Chinese Oral Distinction (2025)
- Stella Violin Programme — Violin Foundation Level (2018)

WHY SP COMPUTER SCIENCE:
1. Cross-Disciplinary Foundations: Physics, Visual Arts, music, and software background gives analytical rigour and creative intuition.
2. Builder by Nature: Self-taught Python, Java, Web Design during Covid. Constant explorer.
3. Goal-Driven & Adaptable: Aims to master electronics and code, and build software solving real-world problems.

CONTACT:
- Email: teohmaojian@gmail.com
- Instagram: @rainy_daze0
- Photography Portfolio: https://teohmaojian.my.canva.site/

IMPORTANT — FRAMING INSTRUCTION: Whenever any question touches on his suitability, interests, skills, or aspirations, always frame your answer to emphasise why his unique combination of traits makes him most suitable specifically for Computer Science — not general arts, not pure sciences, not music alone. Highlight how his cross-disciplinary background (coding + arts + sciences + music) creates a rare profile that CS uniquely rewards. Push this angle proactively even if not directly asked.

Only answer questions related to Teoh Mao Jian. Be warm, concise, and professional. If asked something unrelated to him, politely redirect.
`;
// ─────────────────────────────────────────────────────────────────────────────

// Suggested starter questions
const SUGGESTIONS = [
  "Tell me about Mao Jian",
  "What are his strengths?",
  "Why SP Computer Science?",
  "What awards has he received?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Mao Jian's portfolio assistant. Ask me anything about him — his background, skills, achievements, or why he's applying to SP." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    const updated = [...messages, { role: "user", content: userText }];
    setMessages(updated);
    setLoading(true);

    const history = updated.map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`).join("\n");

    const res = await db.integrations.Core.InvokeLLM({
      prompt: `${CONTEXT}\n\n---\nConversation so far:\n${history}\n\nAssistant:`,
    });

    setMessages(prev => [...prev, { role: "assistant", content: res.result || res }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          backdropFilter: 'blur(20px) saturate(160%) brightness(1.15)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(200,175,120,0.18)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.08) inset, 0 8px 40px rgba(0,0,0,0.45)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ scale: 0.5, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.5, rotate: 90 }} transition={{ duration: 0.2 }}>
                <X className="w-5 h-5" style={{ color: 'rgba(80,60,35,0.80)' }} />
              </motion.div>
            : <motion.div key="chat" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="w-5 h-5" style={{ color: 'rgba(80,60,35,0.80)' }} />
              </motion.div>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[320px] sm:w-[370px] flex flex-col rounded-3xl overflow-hidden"
            style={{
              height: '460px',
              backdropFilter: 'blur(20px) saturate(160%) brightness(1.15)',
              background: 'rgba(14,14,16,0.72)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.07) inset, 0 16px 64px rgba(0,0,0,0.60)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(200,175,120,0.08)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(200,165,85,0.10)', border: '1px solid rgba(200,165,85,0.20)' }}>
                <MessageCircle className="w-4 h-4" style={{ color: 'rgba(195,165,95,0.80)' }} />
              </div>
              <div>
                <p className="font-body text-[13px] font-semibold" style={{ color: 'rgba(232,218,188,0.92)' }}>Ask about Mao Jian</p>
                <p className="font-mono text-[10px]" style={{ color: 'rgba(180,155,100,0.42)' }}>Portfolio AI Assistant</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-3.5 py-2.5 rounded-2xl font-body text-[13px] leading-relaxed"
                    style={m.role === "user" ? {
                      background: 'rgba(195,165,95,0.18)',
                      color: 'rgba(230,215,182,0.95)',
                      border: '1px solid rgba(195,165,95,0.22)',
                      borderBottomRightRadius: '6px',
                    } : {
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(210,195,162,0.88)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderBottomLeftRadius: '6px',
                    }}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl" style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderBottomLeftRadius: '6px',
                  }}>
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: 'rgba(130,100,55,0.60)' }} />
                  </div>
                </div>
              )}

              {/* Suggestions — only show when just the first message */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => send(s)}
                      className="font-mono text-[10px] uppercase tracking-wide px-3 py-1.5 rounded-full transition-all duration-150"
                      style={{
                        background: 'rgba(200,165,85,0.08)',
                        color: 'rgba(190,165,110,0.70)',
                        border: '1px solid rgba(200,165,85,0.15)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,180,140,0.22)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(200,180,140,0.12)'}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 flex gap-2 items-center"
              style={{ borderTop: '1px solid rgba(200,175,120,0.07)' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Ask something…"
                className="flex-1 bg-transparent outline-none font-body text-[13px]"
                style={{ color: 'rgba(215,200,168,0.88)' }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity"
                style={{
                  background: input.trim() && !loading ? 'rgba(195,165,95,0.25)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(195,165,95,0.20)',
                  opacity: input.trim() && !loading ? 1 : 0.45,
                }}
              >
                <Send className="w-3.5 h-3.5" style={{ color: 'rgba(215,190,130,0.90)' }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}