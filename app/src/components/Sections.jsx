import { motion } from 'framer-motion';
import {
  Zap, Target, CalendarCheck, MessagesSquare, Brain, BarChart3,
  Store, PlugZap, BellRing, Package, ServerCog, Check,
} from 'lucide-react';
import { SectionHeading, Reveal } from './Shared.jsx';

const BENEFITS = [
  {
    Icon: Zap,
    title: 'Respuesta instantánea 24/7',
    text: 'Ningún cliente espera más de 5 segundos, ni de noche, ni fines de semana. Cada mensaje recibe respuesta en tu tono y con tu información.',
  },
  {
    Icon: Target,
    title: 'Cada lead calificado',
    text: 'Luna pregunta, filtra y puntúa a cada contacto: quién está listo para comprar, quién necesita seguimiento y quién no encaja.',
  },
  {
    Icon: CalendarCheck,
    title: 'Agenda automática',
    text: 'Conectada con Google Calendar: propone huecos, confirma citas y envía recordatorios para que nadie falte.',
  },
  {
    Icon: MessagesSquare,
    title: 'WhatsApp + Instagram',
    text: 'Una sola agente atiende ambos canales con contexto compartido: si un cliente escribe por donde sea, ella lo reconoce.',
  },
  {
    Icon: Brain,
    title: 'Memoria de clientes',
    text: 'Recuerda cada conversación, preferencia y pedido. El cliente siente que habla con alguien que conoce su negocio de siempre.',
  },
  {
    Icon: BarChart3,
    title: 'Panel y reportes',
    text: 'Conversaciones, leads y citas en un panel claro. Reportes periódicos para saber exactamente qué está generando ingresos.',
  },
];

const STEPS = [
  {
    Icon: Store,
    n: '01',
    title: 'Nos cuentas tu negocio',
    text: 'Una sesión breve: servicios, precios, tono y preguntas frecuentes. Con eso entrenamos a tu agente.',
  },
  {
    Icon: PlugZap,
    n: '02',
    title: 'Entrenamos y conectamos',
    text: 'Luna aprende tu catálogo, conecta con tu WhatsApp, Instagram y calendario, y probamos todo contigo.',
  },
  {
    Icon: BellRing,
    n: '03',
    title: 'Atiende sola, tú decides',
    text: 'Cada lead importante te llega con aviso. Tú solo entras cuando toca cerrar la venta.',
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          kicker="Beneficios"
          title={
            <>
              Todo lo que hace <span className="grad-text">por ti</span>
            </>
          }
          sub="Una sola agente cubre el trabajo de atención al cliente, ventas y agenda. Estos son los resultados desde el primer día."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {BENEFITS.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-3xl p-8 group"
            >
              <div className="w-12 h-12 rounded-2xl badge flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon size={22} className="text-mint" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como" className="py-28 bg-white/[.02]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          kicker="Proceso"
          title={
            <>
              En marcha en <span className="grad-text">7 días</span>
            </>
          }
          sub="Tres pasos y tu agente está trabajando. Sin fricción técnica para ti."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {STEPS.map(({ Icon, n, title, text }, i) => (
            <Reveal key={n} delay={i * 0.12}>
              <div className="glass rounded-3xl p-8 text-center h-full relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 font-display text-[7rem] font-extrabold text-white/[.04] group-hover:text-white/[.08] transition-colors select-none">
                  {n}
                </div>
                <div className="w-12 h-12 mx-auto rounded-2xl badge flex items-center justify-center mb-4 relative">
                  <Icon size={22} className="text-mint" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 relative">{title}</h3>
                <p className="text-white/60 text-sm relative">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const MODELS = [
  {
    Icon: Package,
    tag: 'Pago único · setup',
    title: 'La construcción de tu agente',
    text: 'Se paga una sola vez al empezar. Incluye:',
    items: [
      'Entrenamiento de la IA con tu negocio',
      'Conexión de WhatsApp e Instagram',
      'Integración con tu calendario y herramientas',
      'Flujos de conversación a medida',
      'Pruebas y puesta en marcha',
    ],
  },
  {
    Icon: ServerCog,
    tag: 'Cuota mensual · mensualidad',
    title: 'El servicio continuo',
    text: 'Mantén a tu agente trabajando cada mes. Incluye:',
    items: [
      'Servidores, infraestructura y consumo de IA',
      'Actualizaciones y mejoras continuas',
      'Monitorización y soporte',
      'Reportes periódicos',
      'Cancela cuando quieras, sin permanencia',
    ],
  },
];

export function PricingModel() {
  return (
    <section id="setup" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          kicker="Precio transparente"
          title={
            <>
              Pago único <span className="grad-text">+ cuota mensual</span>
            </>
          }
          sub="Sin sorpresas ni letra pequeña. Así funciona la estructura de precio:"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {MODELS.map(({ Icon, tag, title, text, items }, i) => (
            <Reveal key={tag} delay={i * 0.12}>
              <div className="glass rounded-3xl p-9 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl badge flex items-center justify-center">
                    <Icon size={19} className="text-mint" />
                  </div>
                  <p className="badge text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {tag}
                  </p>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{title}</h3>
                <p className="text-white/60 text-sm mb-5">{text}</p>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <Check size={15} className="text-mint shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
