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
├── i18n.js             # Sistema de internacionalización (traducciones)
├── i18n-extras.js      # Traducciones adicionales (páginas legales)
├── privacy.html        # Política de privacidad
├── terms.html          # Términos de uso
├── sitemap.html        # Mapa del sitio
└── README.md           # Este archivo
```

## 🎨 Características

- Fondo hexagonal interactivo con respuesta al cursor
- Diseño responsive (mobile-first)
- Tema oscuro con acentos tierra/beige
- Proyectos cargados dinámicamente desde `projects.json`
- Sistema de internacionalización (español/inglés)
- Formulario de contacto funcional (ver instrucciones abajo)
- Animaciones suaves y efectos hover

---

## 📖 MANUAL DE ACTUALIZACIÓN

### 1. Cómo actualizar textos e información general

Los textos de la página principal están en dos lugares:

#### A. Textos del HTML (`index.html`)
Muchos textos están directamente en el HTML con atributos `data-i18n`. Para cambiarlos:
1. Abre `index.html`
2. Busca el texto que quieres modificar
3. Cambia el contenido dentro del elemento
4. Si el elemento tiene `data-i18n="alguna.clave"`, también debes actualizar la traducción en `i18n.js`

#### B. Textos traducibles (`i18n.js` y `i18n-extras.js`)
Los textos que cambian con el botón de idioma están en estos archivos:

**`i18n.js`** → textos de la página principal:
- Header, navegación, about, proyectos, skills, experiencia, contacto, footer, formulario

**`i18n-extras.js`** → textos de páginas legales:
- Política de privacidad, términos de uso, mapa del sitio

**Estructura de una traducción:**
```javascript
const translations = {
    es: {
        'clave.del.texto': 'Texto en español',
        // ...
    },
    en: {
        'clave.del.texto': 'Text in English',
        // ...
    }
};
```

**Para agregar una nueva traducción:**
1. Agrega la clave en el bloque `es:` con el texto en español
2. Agrega la misma clave en el bloque `en:` con el texto en inglés
3. En el HTML, agrega `data-i18n="clave.del.texto"` al elemento correspondiente

**Para modificar una traducción existente:**
1. Busca la clave en `i18n.js` o `i18n-extras.js`
2. Cambia el valor en `es:` y/o `en:`
3. No necesitas modificar el HTML

---

### 2. Cómo actualizar proyectos

Los proyectos se cargan dinámicamente desde `projects.json`. Cada proyecto tiene traducciones en español e inglés.

#### Estructura de un proyecto:

```json
{
  "id": "mi-proyecto",
  "tech": "JAVA",
  "stack": ["Java", "Spring", "MySQL"],
  "demoUrl": "https://demo-ejemplo.com",
  "codeUrl": "https://github.com/usuario/proyecto",
  "translations": {
    "es": {
      "title": "TÍTULO DEL PROYECTO",
      "description": "Descripción detallada en español...",
      "source": "Privada",
      "result": "+40% eficiencia"
    },
    "en": {
      "title": "PROJECT TITLE",
      "description": "Detailed description in English...",
      "source": "Private",
      "result": "+40% efficiency"
    }
  }
}
```

#### Pasos para agregar un nuevo proyecto:

1. Abre `projects.json`
2. Copia un proyecto existente como plantilla
3. Modifica los campos:
   - `id`: identificador único sin espacios, solo minúsculas y guiones
   - `tech`: tecnología principal
   - `stack`: array de tecnologías usadas
   - `demoUrl`: URL de demo en vivo (o `#` si no aplica)
   - `codeUrl`: URL del repositorio (o `#` si es privado)
   - `translations.es.title`: título en español
   - `translations.es.description`: descripción en español
   - `translations.es.source`: origen del proyecto
   - `translations.es.result`: resultado o métrica
   - `translations.en.*`: misma información en inglés
4. Agrega el nuevo objeto al array `projects`
5. Verifica que el JSON sea válido (no tenga comas extra ni comillas sin cerrar)

#### Pasos para modificar un proyecto existente:

1. Abre `projects.json`
2. Busca el proyecto por su `id`
3. Modifica los campos necesarios en ambos idiomas (`es` y `en`)
4. Guarda el archivo

#### Verificar que el JSON es válido:

- Usa un validador JSON en línea como https://jsonlint.com/
- O abre la consola del navegador (F12) y busca errores de parsing

---

### 3. Cómo actualizar la experiencia laboral

La experiencia laboral está en el HTML de `index.html`, dentro de la sección `#experience`.

#### Pasos para modificar:

1. Abre `index.html`
2. Busca la sección `<section id="experience" class="neural-section">`
3. Modifica los textos directamente
4. Si quieres que cambien con el idioma, agrega `data-i18n="clave.nueva"` y agrega la traducción en `i18n.js`

**Ejemplo:**
```html
<h3 data-i18n="experience.job1_title">DESARROLLADOR SOFTWARE JUNIOR</h3>
<p class="company" data-i18n="experience.job1_company">Bridgetech | Alfresco</p>
<p data-i18n="experience.job1_desc">Participé en proyectos...</p>
```

Luego en `i18n.js`:
```javascript
'experience.job1_title': 'DESARROLLADOR SOFTWARE JUNIOR', // español
'experience.job1_title': 'SOFTWARE DEVELOPER JUNIOR',     // inglés
```

---

### 4. Cómo actualizar el formulario de contacto

El formulario está en `index.html`, dentro de la sección `#contact`.

#### Configurar Formspree:

1. Crea una cuenta en [formspree.io](https://formspree.io/)
2. Crea un nuevo formulario
3. Copia tu URL de endpoint (ej: `https://formspree.io/f/abc123`)
4. En `index.html`, busca el formulario:
   ```html
   <form class="contact-form" data-endpoint="https://formspree.io/f/TU_ENDPOINT_AQUI">
   ```
5. Reemplaza `TU_ENDPOINT_AQUI` por tu endpoint real
6. Los mensajes de éxito/error ya están traducidos en `i18n.js`

#### Modificar campos del formulario:

1. Abre `index.html`
2. Busca la sección `<form class="contact-form">`
3. Modifica los campos directamente
4. Si agregas campos nuevos, agrega sus traducciones en `i18n.js`

---

### 5. Cómo actualizar las páginas legales

Las páginas legales son `privacy.html`, `terms.html` y `sitemap.html`.

#### Para modificar textos:

1. Abre el archivo correspondiente
2. Busca el texto con `data-i18n="clave"`
3. Modifica el contenido
4. Actualiza la traducción en `i18n-extras.js` si es necesario

#### Para cambiar la fecha de última actualización:

En `privacy.html`, busca:
```html
<p>Última actualización: 09 de Septiembre, 2025</p>
```
Y cambia la fecha.

---

### 6. Cómo actualizar estilos y colores

Los estilos están en `styles.css`.

#### Variables de colores:

Al inicio del archivo, en `:root`, están definidas las variables:
```css
:root {
    --color-black: #0a0908;
    --color-jet-black: #22333b;
    --color-almond-cream: #eae0d5;
    --color-khaki-beige: #c6ac8f;
    --color-stone-brown: #5e503f;
    /* ... */
}
```

Para cambiar la paleta de colores, modifica estos valores.

---

### 7. Cómo probar cambios en local

#### Opción A: Con servidor HTTP (recomendado)

```bash
cd F:\Documentos\GitHub\CarlosDev000.github.io
npx serve .
```

Luego abre `http://localhost:3000`

#### Opción B: Con Python

```bash
cd F:\Documentos\GitHub\CarlosDev000.github.io
python -m http.server 8080
```

Luego abre `http://localhost:8080`

#### Opción C: Abrir directamente (limitado)

Doble clic en `index.html`. Ten en cuenta que:
- El `fetch` de `projects.json` estará bloqueado por CORS
- Los proyectos se verán gracias al fallback hardcodeado
- No podrás probar la carga dinámica ni el cambio de idioma en proyectos

---

### 8. Cómo hacer deploy en GitHub Pages

1. Verifica los cambios:
   ```bash
   git status
   ```

2. Agrega todos los archivos modificados:
   ```bash
   git add .
   ```

3. Crea un commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```

4. Sube a GitHub:
   ```bash
   git push
   ```

5. Espera 1-2 minutos para que GitHub Pages se actualice
6. Visita `https://carlosdev000.github.io`

#### Archivos que NO se suben (ignorados por .gitignore):
- `node_modules/`
- `.vscode/`
- `.DS_Store`
- `*.log`

---

### 9. Cómo agregar un nuevo idioma

1. Abre `i18n.js`
2. Agrega el nuevo idioma en `supportedLangs`:
   ```javascript
   const CONFIG = {
       defaultLang: 'es',
       storageKey: 'portfolio-lang',
       supportedLangs: ['es', 'en', 'fr'] // agrega 'fr' para francés
   };
   ```
3. Agrega el bloque de traducciones completo:
   ```javascript
   const translations = {
       es: { /* ... */ },
       en: { /* ... */ },
       fr: { /* ... */ } // nuevo idioma
   };
   ```
4. Repite el proceso en `i18n-extras.js` si necesitas traducir las páginas legales
5. Actualiza los textos en `index.html` y páginas legales con `data-i18n`

---

### 10. Solución de problemas comunes

#### Página en blanco en local
- Abre la consola del navegador (F12)
- Verifica que no haya errores de sintaxis en `i18n.js` o `scripts.js`
- Asegúrate de usar un servidor HTTP local, no `file://`

#### Proyectos no aparecen
- Verifica que `projects.json` esté en la raíz del proyecto
- Verifica que el JSON sea válido (sin comas extra ni comillas sin cerrar)
- Abre la consola del navegador y busca errores de fetch o parsing

#### Traducciones no cambian
- Verifica que la clave exista tanto en `es` como en `en`
- Verifica que el elemento HTML tenga el atributo `data-i18n` correcto
- Recarga la página con Ctrl+F5 para limpiar caché

#### Botón de idioma no aparece
- Verifica que la página tenga `<header><div class="header-content">`
- El botón se inserta automáticamente en `.header-content`

---

### 11. Notas importantes

- **No modifiques** el orden de carga de los scripts en el HTML
- **No elimines** atributos `data-i18n` sin actualizar las traducciones
- **No subas** archivos con errores de sintaxis a GitHub
- **Siempre prueba** en local con un servidor HTTP antes de hacer push
- **Verifica el JSON** de `projects.json` antes de commit

---

## 📄 Licencia

© 2025 Carlos Rubiano. Todos los derechos reservados.
