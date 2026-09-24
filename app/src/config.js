// ============================================================
// CONFIGURACIÓN — número de WhatsApp de Nexo Digital (Sabadell)
// Owner: Abner · +34 685 093 192 (decisión owner 2026-09-25)
// Todos los botones "Empezar / Agendar" usan este enlace.
// ============================================================
export const WA_NUMBER = '34685093192';

export const waLink = (text = 'Hola, quiero ver a Luna funcionando en mi negocio') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_LINK = waLink();
