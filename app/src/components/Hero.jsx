import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PhoneMock from './PhoneMock.jsx';
import { heroScript } from '../data/conversations.js';
import { WA_LINK } from '../config.js';

function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const dur = 1500;
          const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-2xl font-bold text-white">
      {val}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const wrapRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <header
      ref={wrapRef}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 30%, rgba(124,108,255,.5), transparent 70%), radial-gradient(40% 40% at 20% 80%, rgba(0,224,184,.35), transparent 70%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative z-10 w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="badge inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
          >
            <MessageCircle size={13} className="text-mint" />
            Sabadell · Barcelona · España
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold leading-[1.06]"
          >
            Ningún cliente espera.{' '}
            <span className="grad-text">Ninguna venta se escapa.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 max-w-lg"
          >
            Tus clientes escriben por WhatsApp e Instagram a cualquier hora. Luna responde en
            segundos, en tu tono, califica cada lead y agenda citas. Tú solo entras cuando toca
            cerrar la venta.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0b0b14] glow hover:scale-[1.03] transition-transform"
              style={{ background: 'linear-gradient(90deg, #7c6cff, #00e0b8)' }}
            >
              Quiero mi agente
              <ArrowRight size={17} />
            </a>
            <a
              href="#como"
              className="px-7 py-3.5 rounded-full font-semibold glass hover:bg-white/10 transition"
            >
              Cómo funciona
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex gap-8 text-sm text-white/60"
          >
            <div>
              <Counter to={24} />
              /7<br />disponible
            </div>
            <div>
              <Counter to={5} suffix="s" />
              <br />
              <span className="text-white/60">respuesta media</span>
            </div>
            <div>
              <Counter to={100} suffix="%" />
              <br />
              <span className="text-white/60">en tu tono</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="hidden md:flex justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div style={{ rotateX: rx, rotateY: ry }}>
            <div className="animate-float">
              <PhoneMock script={heroScript} channel="whatsapp" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
