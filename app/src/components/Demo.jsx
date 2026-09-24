import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Instagram, RotateCcw, MessageCircle } from 'lucide-react';
import PhoneMock from './PhoneMock.jsx';
import { SectionHeading, Reveal } from './Shared.jsx';
import { whatsappScript, instagramScript } from '../data/conversations.js';

const TABS = [
  { id: 'whatsapp', label: 'WhatsApp', Icon: Phone, script: whatsappScript },
  { id: 'instagram', label: 'Instagram DM', Icon: Instagram, script: instagramScript },
];

export default function Demo() {
  const [active, setActive] = useState('whatsapp');
  const [replayKey, setReplayKey] = useState(0);
  const tab = TABS.find((t) => t.id === active);

  return (
    <section id="demo" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{ background: 'radial-gradient(50% 40% at 50% 0%, rgba(124,108,255,.5), transparent 70%)' }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeading
          kicker="Demostración"
          title={
            <>
              Mírala en acción, <span className="grad-text">en tus canales</span>
            </>
          }
          sub="Así atiende Luna una conversa real de principio a fin: responde, califica y agenda — sin intervención humana."
        />

        <Reveal className="flex justify-center mt-10" delay={0.1}>
          <div className="inline-flex glass rounded-full p-1 gap-1">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => { setActive(id); setReplayKey((k) => k + 1); }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  active === id ? 'text-[#0b0b14]' : 'text-white/70 hover:text-white'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="demo-tab"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #7c6cff, #00e0b8)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={15} /> {label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + replayKey}
              initial={{ opacity: 0, y: 24, rotateY: -8 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1200 }}
            >
              <PhoneMock script={tab.script} channel={active} replayKey={replayKey} />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setReplayKey((k) => k + 1)}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <RotateCcw size={14} /> Reproducir de nuevo
          </button>
          <p className="text-white/35 text-xs flex items-center gap-1.5">
            <MessageCircle size={11} /> Conversación simulada con fines de demostración
          </p>
        </div>
      </div>
    </section>
  );
}
