import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionHeading, Reveal } from './Shared.jsx';
import { waLink } from '../config.js';

const PLANS = [
  {
    name: 'Esencial',
    tagline: 'Para empezar a no perder ni un mensaje.',
    setup: '490 €',
    monthly: '89 €',
    features: [
      'WhatsApp 24/7: FAQ, respuestas y calificación de leads',
      'Agendamiento de citas',
      '1 número de WhatsApp',
      'Reporte mensual',
    ],
    highlight: false,
    cta: 'Empezar',
  },
  {
    name: 'Crecimiento',
    tagline: 'WhatsApp + Instagram con panel completo.',
    setup: '990 €',
    monthly: '189 €',
    features: [
      'Todo lo del plan Esencial',
      'Instagram DM incluido',
      'CRM Kanban de leads',
      'Reengagement de clientes',
      'Integración Google Agenda / Sheets',
      'Panel para tu equipo',
    ],
    highlight: true,
    cta: 'Empezar',
  },
  {
    name: 'Premium',
    tagline: 'Una agente que cierra ventas por ti.',
    setup: '1.900 €',
    monthly: '349 €',
    features: [
      'Todo lo del plan Crecimiento',
      'Memoria de clientes: cierra pedidos y reservas sola',
      'Integraciones vía API',
      'Reportes semanales',
      'Soporte prioritario',
    ],
    highlight: false,
    cta: 'Empezar',
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-28 bg-white/[.02]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          kicker="Planes"
          title={
            <>
              Planes para <span className="grad-text">cada etapa</span>
            </>
          }
          sub="Todos con pago único de setup y cuota mensual. IVA no incluido."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-16 items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-8 flex flex-col h-full relative ${
                  plan.highlight
                    ? 'glow'
                    : 'glass'
                }`}
                style={
                  plan.highlight
                    ? {
                        background:
                          'linear-gradient(160deg, rgba(124,108,255,.16), rgba(0,224,184,.10))',
                        border: '1px solid rgba(124,108,255,.45)',
                      }
                    : undefined
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge text-xs font-semibold px-4 py-1 rounded-full inline-flex items-center gap-1.5">
                    <Star size={11} className="text-mint" /> MÁS ELEGIDO
                  </span>
                )}
                <h3 className="font-display font-bold text-xl">{plan.name}</h3>
                <p className="text-white/55 text-sm mt-1">{plan.tagline}</p>
                <p className="mt-6">
                  <span className="font-display text-3xl font-extrabold">{plan.setup}</span>{' '}
                  <span className="text-white/50 text-sm">setup único</span>
                </p>
                <p className="mt-1">
                  <span className="grad-text font-display text-3xl font-extrabold">{plan.monthly}</span>{' '}
                  <span className="text-white/50 text-sm">/mes</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/75 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={15} className="text-mint shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hola, me interesa el plan ${plan.name} de Luna`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                    plan.highlight
                      ? 'text-[#0b0b14] hover:scale-[1.02]'
                      : 'glass hover:bg-white/10'
                  }`}
                  style={
                    plan.highlight
                      ? { background: 'linear-gradient(90deg, #7c6cff, #00e0b8)' }
                      : undefined
                  }
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="text-center text-white/45 text-sm mt-10">
            Menos que el salario de un comercial en España — y trabaja las 24 horas, los 365
            días. Sin coste por asiento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: '¿Se nota que es una IA?',
    a: 'Luna conversa en el tono de tu negocio: entrena con tus servicios, precios y forma de hablar. La mayoría de los clientes notan rapidez y buen trato, no que sea una máquina.',
  },
  {
    q: '¿Y si Luna no sabe responder algo?',
    a: 'No inventa: cuando una pregunta sale de su alcance, avisa a tu equipo con el contexto completo y deriva la conversa. Tú siempre tienes la última palabra.',
  },
  {
    q: '¿Necesito cambiar de número de WhatsApp o de Instagram?',
    a: 'No. Conectamos con tu WhatsApp Business y tu cuenta de Instagram actuales. Tus clientes siguen escribiendo donde siempre.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. La cuota mensual no tiene permanencia: cancelas cuando quieras y tu agente se detiene al final del ciclo pagado.',
  },
  {
    q: '¿Cuánto tarda en estar lista?',
    a: 'Una semana de media: sesión inicial, entrenamiento, conexión de canales y pruebas contigo antes de encenderla con clientes reales.',
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          kicker="Dudas frecuentes"
          title={
            <>
              Preguntas que <span className="grad-text">todos hacen</span>
            </>
          }
        />
        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 font-semibold text-[15px]">
                    <HelpCircle size={17} className="text-mint shrink-0" />
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-white/50 shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 pl-14 text-sm text-white/60 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <footer className="py-24 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(50% 60% at 50% 100%, rgba(124,108,255,.6), transparent 70%)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold">
            ¿Hablamos de <span className="grad-text">tu negocio</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/60 mt-4">
            Sesión de 20 minutos sin compromiso. Te enseñamos a Luna funcionando en vivo.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={waLink('Hola, quiero agendar la sesión gratuita de 20 minutos')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-10 py-4 rounded-full font-semibold text-lg text-[#0b0b14] glow hover:scale-[1.03] transition-transform"
            style={{ background: 'linear-gradient(90deg, #7c6cff, #00e0b8)' }}
          >
            Agendar sesión gratuita <ArrowRight size={19} />
          </a>
        </Reveal>
        <p className="mt-14 text-white/35 text-xs">
          Luna · Agente de IA — Nexo Digital · Sabadell / Barcelona
        </p>
      </div>
    </footer>
  );
}
