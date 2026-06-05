const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useEffect, useRef } from "react";

// ─── Background texture — replace URL to change ───────────────────
const TEXTURE_URL = "https://media.db.com/images/public/6a14433b0309bcb2feb3a889/26ee4fede_darktexturebg.webp";
// ─────────────────────────────────────────────────────────────────

export default function TextureOverlay() {
  const blobsRef = useRef(null);

  useEffect(() => {
    let id, t = 0;
    const tick = () => {
      t += 0.0006;
      if (blobsRef.current) {
        const b = blobsRef.current.children;
        if (b[0]) b[0].style.transform = `translate(${Math.sin(t) * 90}px, ${Math.cos(t * 0.6) * 60}px)`;
        if (b[1]) b[1].style.transform = `translate(${Math.cos(t * 0.7) * 70}px, ${Math.sin(t * 0.45) * 80}px)`;
        if (b[2]) b[2].style.transform = `translate(${Math.sin(t * 0.4) * 100}px, ${Math.cos(t * 0.8) * 45}px)`;
      }
      id = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Dark brushed metal texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${TEXTURE_URL}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Very subtle dark overlay to deepen and unify */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(8,8,10,0.30) 0%, rgba(12,12,14,0.18) 50%, rgba(10,10,12,0.28) 100%)',
        }}
      />

      {/* Slow ambient glows — warm gold/amber on dark */}
      <div ref={blobsRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{
          width: '700px', height: '700px', top: '-5%', left: '0%',
          background: 'radial-gradient(circle, rgba(200,160,80,0.06) 0%, transparent 62%)',
          filter: 'blur(100px)',
        }} />
        <div className="absolute rounded-full" style={{
          width: '550px', height: '550px', top: '35%', right: '-5%',
          background: 'radial-gradient(circle, rgba(160,140,200,0.04) 0%, transparent 62%)',
          filter: 'blur(90px)',
        }} />
        <div className="absolute rounded-full" style={{
          width: '500px', height: '500px', bottom: '5%', left: '30%',
          background: 'radial-gradient(circle, rgba(180,150,90,0.05) 0%, transparent 62%)',
          filter: 'blur(90px)',
        }} />
      </div>

      {/* Subtle top spotlight — matches the wallpaper's light source */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(80,70,55,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}