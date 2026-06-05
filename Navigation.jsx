/**
 * Dark-mode liquid glass card.
 * Designed for the dark brushed metal background.
 * Minimal blur so background texture stays visible through the glass.
 */
export default function GlassCard({ children, className = "", style = {}, rounded = "2xl" }) {
  const rMap = { lg: '0.875rem', xl: '1.1rem', '2xl': '1.35rem', '3xl': '2rem', full: '9999px' };
  const r = rMap[rounded] || '1.35rem';

  return (
    <div
      className={className}
      style={{
        borderRadius: r,
        backdropFilter: 'blur(16px) saturate(160%) brightness(1.18)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%) brightness(1.18)',
        background: 'rgba(255, 255, 255, 0.045)',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        boxShadow: [
          '0 1px 0 rgba(255,255,255,0.10) inset',  // top highlight
          '0 -1px 0 rgba(0,0,0,0.25) inset',        // bottom inner shadow
          '1px 0 0 rgba(255,255,255,0.06) inset',    // left edge
          '0 8px 40px rgba(0,0,0,0.35)',             // main shadow
          '0 2px 8px rgba(0,0,0,0.20)',              // close shadow
        ].join(', '),
        ...style,
      }}
    >
      {children}
    </div>
  );
}