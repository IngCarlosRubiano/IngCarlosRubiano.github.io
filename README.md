# CarlosDev000.github.io

Portafolio profesional de Carlos Rubiano, Ingeniero de Software. Sitio web estático alojado en GitHub Pages.

## 🛠️ Stack Tecnológico

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con variables CSS, diseño responsive y animaciones
- **JavaScript (Vanilla)** - Interactividad sin dependencias

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal del portafolio
├── styles.css          # Hoja de estilos global
├── scripts.js          # Lógica de interactividad
├── projects.json       # Datos de proyectos (cargados dinámicamente)
├── privacy.html        # Política de privacidad
├── terms.html          # Términos de uso
├── sitemap.html        # Mapa del sitio
└── README.md           # Este archivo
```

## 🎨 Características

- Fondo hexagonal interactivo con respuesta al cursor
- Diseño responsive (mobile-first)
- Tema oscuro con acentos neón cyan/magenta
- Proyectos cargados dinámicamente desde `projects.json`
- Formulario de contacto funcional (ver instrucciones abajo)
- Animaciones suaves y efectos hover

## 🌐 Sistema de Internacionalización (i18n)

El sitio incluye un sistema de traducción automático con las siguientes características:

- **Detección automática de idioma**: el sitio se carga en el idioma configurado en el navegador del usuario
- **Selector manual**: botón en el header para cambiar entre español e inglés
- **Persistencia**: el idioma seleccionado se guarda en `localStorage`
- **Traducción completa**: incluye todas las páginas (inicio, privacidad, términos, sitemap)

### Idiomas soportados
- 🇪🇸 Español (es)
- 🇬🇧 English (en)

### Agregar un nuevo idioma
Para agregar un nuevo idioma, edita el archivo `i18n.js` y agrega un nuevo bloque en el objeto `translations` con las mismas claves de traducción.

## 📝 Cómo Agregar un Nuevo Proyecto

Edita el archivo `projects.json` y agrega un nuevo objeto al array `projects`:

```json
{
  "id": "mi-nuevo-proyecto",
  "title": "NOMBRE DEL PROYECTO",
  "tech": "TECNOLOGÍA PRINCIPAL",
  "description": "Descripción detallada del proyecto...",
  "stack": ["Tech1", "Tech2"],
  "source": "Pública / Privada / Uso interno",
  "result": "Métrica o resultado destacado",
  "demoUrl": "https://...",
  "codeUrl": "https://..."
}
```

- `id`: identificador único (sin espacios, minúsculas y guiones)
- `demoUrl`: URL a demo en vivo (o `#` si no aplica)
- `codeUrl`: URL a repositorio (o `#` si es privado)

## 📬 Configurar el Formulario de Contacto

El formulario usa [Formspree](https://formspree.io/) para funcionar en GitHub Pages sin backend:

1. Crea una cuenta en [formspree.io](https://formspree.io/)
2. Crea un nuevo formulario y obtén tu URL de endpoint
3. Reemplaza el valor de `data-endpoint` en `index.html` (línea del formulario) con tu URL de Formspree
4. Las respuestas llegarán al email asociado a tu cuenta

## 🚀 Despliegue

Este sitio está configurado para desplegarse automáticamente en GitHub Pages al hacer push a la rama principal.

## 📄 Licencia

© 2025 Carlos Rubiano. Todos los derechos reservados.
