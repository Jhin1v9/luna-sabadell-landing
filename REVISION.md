# Revisión de marketing — Luna Sabadell (2026-09-24)

## Qué se cambió (v2)

1. **Emojis fuera, Lucide React dentro** — todos los iconos ahora son SVGs
   consistentes (Zap, Target, CalendarCheck, Brain, BarChart3...). Los emojis
   en una landing de venta B2B bajan la percepción de precio; los iconos
   lineales suben la confianza.
2. **Mocks animados de WhatsApp e Instagram** — sección "Mírala en acción":
   dos teléfonos con conversaciones reales simuladas (salón de belleza de
   Sabadell), indicador de "escribiendo...", ticks de lectura, tarjetas de
   "cita creada / lead calificado / equipo notificado". Selector de pestañas
   + botón de reproducción. Aviso honesto de "conversación simulada".
3. **Animaciones e interacciones** — Framer Motion: reveals on scroll, tilt 3D
   del teléfono en el hero con el ratón, contadores animados (24/7, 5s, 100%),
   hover en tarjetas, acordeón FAQ, cambio de pestañas con indicador
   deslizante, bucle de conversación.
4. **Copy de venta reforzado**:
   - H1 orientado a resultado + dolor: "Ningún cliente espera. Ninguna venta
     se escapa." (antes describía el producto; ahora vende el resultado).
   - Subtitular con la mecánica de valor: el cliente entiende QUÉ hace y
     CUÁL es su papel (entrar solo para cerrar).
   - FAQ con 5 objeciones reales de compra (¿se nota la IA?, ¿y si no sabe?,
     ¿cambio de número?, ¿cancelar?, ¿cuánto tarda?).
   - CTAs con texto pre-rellenado distinto por plan en el link de WhatsApp.
5. **Jerarquía clara de decisión**: Demo (prueba) → Beneficios (qué gano) →
   Cómo funciona (cómo empiezo) → Setup+cuota (cómo pago) → Planes (cuánto) →
   FAQ (dudas) → CTA final.

## Recomendaciones que NO se implementaron (pendientes del owner)

1. **Número de WhatsApp real** — `app/src/config.js` → `WA_NUMBER` está com
   placeholder `34600000000`. Sin esto los botones "Empezar" abren un wa.me
   vacío. **Bloqueante para produção.**
2. **Prueba social real** — el mayor conversor que falta: 2-3 testimonios con
   nombre, negocio y resultado ("Clínica dental en Terrassa: +31 citas/mes").
   No se inventaron (decoro fail-closed) — pedir al primer cliente piloto.
3. **Casos por sector** — sección de 3 mini-casos (peluquería, clínica,
   restaurante) con cifras reales cuando existan.
4. **Garantía/riesgo invertido** — considerar "si en 30 días no responde como
   debe, te devolvemos el setup" para destrabar la decisión.
5. **Analytics** — conectar Plausible/Umami o GA4 para saber de dónde vienen
   los leads (hoy es una landing ciega).

## Modo de venda (diagnóstico)

El modelo setup + mensualidad está bien explicado y el ancla "menos que el
salario de un comercial" es buena. El salto de 490→990→1.900 € de setup es
agresivo sin prueba social; con los primeros 2-3 clientes reales la conversión
mejora mucho. Recomendación: vender Crecimiento como entrada real (el "MÁS
ELEGIDO" ya está bien posicionado) y usar Esencial como ancla de comparación.
