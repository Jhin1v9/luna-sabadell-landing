// Roteiros das conversas simuladas (demonstração visual — não são conversas reais).
// from: 'client' (balão do cliente) | 'luna' (balão da Luna, com indicador de digitando)
// | 'system' (cartão central de resumo).

export const whatsappScript = [
  { from: 'client', text: 'Hola, ¿tenéis hueco esta semana para un corte?', time: '18:42' },
  { from: 'luna', text: '¡Hola Marta! Claro. Tenemos jueves a las 17:30 o viernes a las 10:00 con Laura. ¿Cuál te viene mejor?', time: '18:42' },
  { from: 'client', text: 'Jueves 17:30 perfecto', time: '18:43' },
  { from: 'luna', text: 'Reservado: jueves 17:30 con Laura. Te envío un recordatorio esa misma mañana. ¿Algo más en lo que pueda ayudarte?', time: '18:43' },
  {
    from: 'system',
    time: '18:43',
    card: [
      { icon: 'calendar', label: 'Cita creada: jueves 17:30' },
      { icon: 'target', label: 'Lead calificado: alto interés' },
      { icon: 'bell', label: 'Resumen enviado al equipo' },
    ],
  },
];

export const instagramScript = [
  { from: 'client', text: 'precio del balayage??', time: '12:07' },
  { from: 'luna', text: 'Hola! El balayage completo va desde 85 € según el largo. Incluye diagnóstico, color y tratamiento. ¿Quieres que te agende una valoración gratuita?', time: '12:07' },
  { from: 'client', text: 'sii porfa', time: '12:08' },
  { from: 'luna', text: 'Genial. ¿Mañana a las 18:00 o el sábado a las 11:30?', time: '12:08' },
  { from: 'client', text: 'mañana 18:00 va bien', time: '12:09' },
  { from: 'luna', text: 'Listo, mañana 18:00 — valoración gratuita. Te recuerdo por aquí una hora antes.', time: '12:09' },
  {
    from: 'system',
    time: '12:09',
    card: [
      { icon: 'calendar', label: 'Cita: mañana 18:00 · Valoración' },
      { icon: 'instagram', label: 'Canal: Instagram DM' },
      { icon: 'bell', label: 'Dueña notificada al instante' },
    ],
  },
];

// Mini roteiro do hero (loop rápido)
export const heroScript = [
  { from: 'client', text: '¿Seguís abiertos a esta hora?', time: '23:12' },
  { from: 'luna', text: '¡Hola! Sí, atendemos el pedido por aquí. ¿Qué necesitas?', time: '23:12' },
  { from: 'client', text: 'Quiero reservar para mañana', time: '23:13' },
  { from: 'luna', text: 'Hecho: mañana 10:30. Te llega la confirmación ahora mismo.', time: '23:13' },
];
