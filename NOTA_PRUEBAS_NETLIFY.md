# Nota de Despliegue en Netlify — Entorno de Pruebas y Revisión (iQUÁNTICA)

---

## Opción 1 · Mensaje corto para WhatsApp o chat de oficina

Hola equipo 👋, ya subimos la página web corporativa de **iQUÁNTICA** a **Netlify** con el diseño definitivo elegido en la oficina para iniciar la fase de **pruebas, depuración y recepción de comentarios**:

🔗 Enlace de pruebas: **[PEGAR AQUÍ ENLACE DE NETLIFY]**

**¿Qué les agradecemos revisar tanto en PC como en teléfono?**
1. Navegación general y botón flotante de scroll suave entre secciones.
2. Sección de **Servicios Multidisciplinarios** (cambio de pestañas y reproducción del video — *por ahora tiene un video de YouTube de prueba*).
3. Secciones de **Proyectos**, **Novedades**, **Contacto** y **Ubicación GPS** (mapa de Google Maps y copiado de coordenadas).
4. Redacción, ortografía, colores y visualización en distintos tamaños de pantalla.

> **Nota:** Esta publicación es un entorno temporal de pruebas/QA. Algunos datos como los enlaces definitivos de redes sociales, videos reales por especialidad y el envío real del formulario de contacto se terminarán de conectar al pasar a producción.

Cualquier detalle, error visual o sugerencia que encuentren, por favor compártanlo por aquí (indicando si fue desde celular o computadora) para ajustarlo antes de la publicación oficial.

---

## Opción 2 · Mensaje formal para correo electrónico

**Asunto:** Vista previa web corporativa iQUÁNTICA — Entorno de pruebas en Netlify y comentarios

Estimado equipo,

Les compartimos el enlace de la versión preliminar de la página web corporativa de **iQUÁNTICA**, publicada temporalmente en **Netlify** con fines de **pruebas funcionales, depuración visual y recopilación de comentarios**:

- **URL de pruebas:** `[PEGAR AQUÍ ENLACE DE NETLIFY]`

Esta versión consolida la estructura definida por la oficina:
- Portada principal y barra de navegación corporativa.
- Trayectoria (*Legado de Excelencia*) e indicadores clave de impacto.
- Explorador interactivo de **Servicios Multidisciplinarios** con reproductor integrado *(actualmente utilizando un video demostrativo de prueba)*.
- Portafolio de proyectos por zona, módulo demostrativo de **Novedades / Blog**, bloque de **Calidad y SIHO-A**, **Contacto** con canales digitales y sección dedicada de **Ubicación GPS y Google Maps**.

Para facilitar la depuración antes del despliegue final a producción, agradecemos probarla desde computadora y dispositivos móviles y enviarnos sus observaciones sobre:
1. Comportamiento de los botones, pestañas y desplazamiento suave entre secciones.
2. Legibilidad, márgenes o posibles fallos visuales en distintas resoluciones.
3. Textos, cifras, correos o enlaces que requieran actualización con información definitiva.

*(Nota: al tratarse de un entorno de pruebas, los enlaces de redes sociales, el PDF definitivo del dossier y la integración del formulario hacia el correo corporativo final se habilitarán en la fase de producción).*

Quedamos atentos a sus comentarios.

Saludos cordiales,

---

## Recordatorio técnico rápido de subida a Netlify

- **Compilación lista:** la carpeta `dist/` ya fue generada con `npm run build` y está lista para arrastrarse directamente en **Netlify Drop** (`app.netlify.com/drop`).
- **Si conectas por Git (CI/CD):**
  - *Build command:* `npm run build`
  - *Publish directory:* `dist`
