import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// ─── EDIT ALL CONTENT HERE ───────────────────────────────────────

const MONOGRAM = "Portfolio";

const NAV_LINKS = [
  { label: "About",     href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Why Me",    href: "#whyme" },
  { label: "Connect",   href: "#connect" },
];

// ────────────────────────────────────────────────────────────────

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '700px',
            borderRadius: '9999px',
            backdropFilter: 'blur(20px) saturate(180%) brightness(1.20)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.20)',
            background: 'rgba(255,255,255,0.048)',
            border: '1px solid rgba(255,255,255,0.11)',
            boxShadow: [
              '0 1px 0 rgba(255,255,255,0.12) inset',
              '0 8px 48px rgba(0,0,0,0.40)',
              '0 2px 8px rgba(0,0,0,0.25)',
            ].join(', '),
          }}
        >
          <div className="relative flex items-center justify-center px-6 sm:px-7" style={{ height: '52px' }}>
            {/* Monogram — absolute left */}
            <a
              href="#splash"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="absolute left-6 font-display font-bold text-[15px] tracking-tight"
              style={{ color: 'rgba(220,205,175,0.92)' }}
            >
              {MONOGRAM}
            </a>

            {/* Nav links — truly centered */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-body text-[13px] font-medium tracking-wide transition-colors duration-150"
                  style={{ color: 'rgba(200,185,155,0.55)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(230,215,185,0.95)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(200,185,155,0.55)'}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button — absolute right */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="absolute right-6 md:hidden w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X    className="w-3.5 h-3.5" style={{ color: 'rgba(220,205,175,0.80)' }} />
                : <Menu className="w-3.5 h-3.5" style={{ color: 'rgba(220,205,175,0.80)' }} />
              }
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{
              backdropFilter: 'blur(32px) brightness(0.75)',
              WebkitBackdropFilter: 'blur(32px) brightness(0.75)',
              background: 'rgba(8,8,10,0.80)',
            }}
          >
            <nav className="flex flex-col items-center gap-9">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-display text-3xl font-medium"
                  style={{ color: 'rgba(230,215,185,0.90)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}