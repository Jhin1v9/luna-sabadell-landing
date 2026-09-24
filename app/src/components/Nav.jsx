import { useState } from 'react';
import { motion } from 'framer-motion';
import { WA_LINK } from '../config.js';

const LINKS = [
  ['#demo', 'Verla en acción'],
  ['#beneficios', 'Beneficios'],
  ['#como', 'Cómo funciona'],
  ['#planos', 'Planes'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-extrabold text-xl tracking-tight">
          Luna<span className="grad-text">·IA</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-white/70">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-sm font-semibold px-4 py-2 rounded-full badge hover:opacity-80 transition"
          >
            Ver planes
          </a>
          <button
            className="md:hidden text-white/80 p-1"
            aria-label="Menú"
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-3 text-sm text-white/80"
        >
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
