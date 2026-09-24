// ============================================================
// CONFIGURACIÓN — TODO(Abner): sustituir por el número real de
// WhatsApp de Nexo (formato internacional, sin '+'). Ej: 34612345678
// Todos los botones "Empezar / Agendar" usan este enlace.
// ============================================================
export const WA_NUMBER = '34600000000';

export const waLink = (text = 'Hola, quiero ver a Luna funcionando en mi negocio') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_LINK = waLink();
