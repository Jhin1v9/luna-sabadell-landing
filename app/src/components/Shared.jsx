import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '', y = 40 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, title, sub }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && (
        <Reveal>
          <p className="badge inline-block text-[11px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5">
            {kicker}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="text-white/60 mt-4">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
