@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-display: 'Playfair Display', 'Georgia', serif;
    --font-body: 'DM Sans', system-ui, sans-serif;
    --font-mono: 'DM Mono', monospace;
    --font-editorial: 'Cormorant Garamond', 'Georgia', serif;

    /* Dark: deep graphite brushed metal */
    --background: 220 8% 6%;
    --foreground: 36 14% 88%;
    --card: 220 8% 9%;
    --card-foreground: 36 14% 88%;
    --popover: 220 8% 9%;
    --popover-foreground: 36 14% 88%;
    --primary: 36 16% 84%;
    --primary-foreground: 220 8% 8%;
    --secondary: 220 6% 13%;
    --secondary-foreground: 36 10% 72%;
    --muted: 220 6% 11%;
    --muted-foreground: 36 6% 50%;
    --accent: 38 22% 58%;
    --accent-foreground: 220 8% 7%;
    --destructive: 0 55% 42%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 8% 16%;
    --input: 220 8% 16%;
    --ring: 36 14% 70%;
    --radius: 0.875rem;
  }

  /* No separate .dark block — site always renders dark */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Typography utility classes */
.font-display   { font-family: var(--font-display); }
.font-editorial { font-family: var(--font-editorial); }
.font-body      { font-family: var(--font-body); }
.font-mono-dm   { font-family: var(--font-mono); }

/* Dark liquid glass */
.glass-light {
  backdrop-filter: blur(16px) saturate(160%) brightness(1.18);
  -webkit-backdrop-filter: blur(16px) saturate(160%) brightness(1.18);
  background: rgba(255,255,255,0.042);
  border: 1px solid rgba(255,255,255,0.09);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.10) inset,
    0 8px 40px rgba(0,0,0,0.35);
}

/* Scrollbar */
::-webkit-scrollbar       { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.14); }

/* Subtle pulse for scroll indicator */
@keyframes breathe {
  0%, 100% { opacity: 0.3; transform: scaleY(0.55); }
  50%       { opacity: 0.85; transform: scaleY(1); }
}

/* Shimmer */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}