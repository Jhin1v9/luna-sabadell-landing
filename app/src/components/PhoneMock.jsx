import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check, CheckCheck, CalendarDays, Target, BellRing, Instagram, Phone,
} from 'lucide-react';

const CARD_ICONS = {
  calendar: CalendarDays,
  target: Target,
  bell: BellRing,
  instagram: Instagram,
};

// Tema visual de cada canal
const THEMES = {
  whatsapp: {
    header: 'bg-[#008069]',
    chatBg: 'wa-bg',
    incoming: 'bg-[#202c33] text-[#e9edef]',
    outgoing: 'bg-[#005c4b] text-[#e9edef]',
    input: 'bg-[#2a3942] text-[#8696a0]',
    ticks: true,
    label: 'WhatsApp',
    Icon: Phone,
  },
  instagram: {
    header: 'bg-[#111111] border-b border-white/10',
    chatBg: 'bg-[#000000]',
    incoming: 'bg-[#262626] text-[#f5f5f5]',
    outgoing: 'bg-[#3b82f6] text-white',
    input: 'bg-[#262626] text-[#8e8e8e]',
    ticks: false,
    label: 'Instagram DM',
    Icon: Instagram,
  },
};

function TypingBubble({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`${theme.incoming} rounded-2xl rounded-tl-sm px-3 py-2.5 self-start flex gap-1 items-center`}
    >
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span className="typing-dot" />
    </motion.div>
  );
}

/**
 * Player de conversa animada: dispara os passos em sequência, mostra
 * "digitando..." antes das mensagens da Luna, e reinicia em loop.
 */
export default function PhoneMock({ script, channel = 'whatsapp', loop = true, replayKey = 0 }) {
  const theme = THEMES[channel];
  const [steps, setSteps] = useState([]); // passos já revelados
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    setSteps([]);
    setTyping(false);
    let i = 0;
    const cancelled = { v: false };

    const next = () => {
      if (cancelled.v) return;
      if (i >= script.length) {
        if (loop) timers.current.push(setTimeout(() => { setSteps([]); i = 0; next(); }, 4200));
        return;
      }
      const step = script[i];
      if (step.from === 'luna') {
        setTyping(true);
        timers.current.push(setTimeout(() => {
          if (cancelled.v) return;
          setTyping(false);
          setSteps((s) => [...s, step]);
          i += 1;
          timers.current.push(setTimeout(next, 900));
        }, 700 + Math.min(step.text.length * 14, 1500)));
      } else {
        setSteps((s) => [...s, step]);
        i += 1;
        timers.current.push(setTimeout(next, step.from === 'system' ? 1400 : 1000));
      }
    };

    timers.current.push(setTimeout(next, 600));
    return () => {
      cancelled.v = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [script, loop, replayKey]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [steps, typing]);

  const ChannelIcon = theme.Icon;

  return (
    <div className="w-[300px] h-[580px] rounded-[2.6rem] border border-white/15 bg-black p-2.5 glow">
      <div className="w-full h-full rounded-[2.1rem] overflow-hidden flex flex-col bg-[#10101d] relative">
        {/* notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />

        {/* header */}
        <div className={`${theme.header} pt-7 pb-2.5 px-4 flex items-center gap-2.5 z-10`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-mint flex items-center justify-center shrink-0">
            <span className="font-display font-bold text-[13px] text-[#0b0b14]">L</span>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold leading-tight truncate">Luna · tu negocio</p>
            <p className="text-[10px] text-emerald-300/90 flex items-center gap-1">
              <ChannelIcon size={9} /> en línea
            </p>
          </div>
        </div>

        {/* chat */}
        <div ref={scrollRef} className={`${theme.chatBg} flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2`}>
          <AnimatePresence initial={false}>
            {steps.map((step, idx) =>
              step.from === 'system' ? (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="self-center my-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-3 py-2.5 w-[92%] space-y-1.5"
                >
                  {step.card.map((row, j) => {
                    const RowIcon = CARD_ICONS[row.icon] ?? BellRing;
                    return (
                      <div key={j} className="flex items-center gap-2 text-[11px] text-white/80">
                        <RowIcon size={12} className="text-mint shrink-0" />
                        {row.label}
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  className={`max-w-[82%] px-3 py-2 rounded-2xl text-[13px] leading-snug ${
                    step.from === 'luna'
                      ? `${theme.incoming} rounded-tl-sm self-start`
                      : `${theme.outgoing} rounded-tr-sm self-end`
                  }`}
                >
                  {step.text}
                  <span className="flex items-center justify-end gap-1 mt-1 text-[9px] opacity-60">
                    {step.time}
                    {step.from === 'luna' && theme.ticks && <CheckCheck size={11} />}
                  </span>
                </motion.div>
              ),
            )}
            {typing && <TypingBubble key="typing" theme={theme} />}
          </AnimatePresence>
        </div>

        {/* input falso (visual) */}
        <div className={`${theme.input} px-4 py-3 text-[12px] flex items-center gap-2 z-10`}>
          <span className="flex-1">Mensaje</span>
          <Check size={13} className="opacity-50" />
        </div>
      </div>
    </div>
  );
}
