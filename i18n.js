/**
 * I18N SYSTEM - CARLOS RUBIANO PORTFOLIO
 * Detección automática de idioma + selector manual
 */

(function() {
    'use strict';

    // ===== CONFIGURACIÓN =====
    const CONFIG = {
        defaultLang: 'es',
        storageKey: 'portfolio-lang',
        supportedLangs: ['es', 'en']
    };

    // ===== TRADUCCIONES =====
    const translations = {
        es: {
            // Header
            'nav.about': 'SOBRE MÍ',
            'nav.projects': 'PROYECTOS',
            'nav.skills': 'HABILIDADES',
            'nav.experience': 'EXPERIENCIA',
            'nav.contact': 'CONTACTO',
            'header.subtitle': 'INGENIERO DE SOFTWARE | DESARROLLADOR BACKEND',
            'header.description': 'Apasionado por la tecnología y la resolución de problemas a través del desarrollo de software. Me especializo en backend y administración de entornos Linux, con un enfoque en crear soluciones eficientes y escalables.',
            
            // About
            'about.title': 'SOBRE MÍ',
            'about.text1': 'Soy estudiante de los últimos semestres de Ingeniería Telemática y tecnólogo en Sistematización de Datos, con experiencia en el diseño, desarrollo e implementación de aplicaciones informáticas.',
            'about.highlights': 'Me destaco por:',
            'about.item1': 'Habilidades en programación backend y manejo de bases de datos.',
            'about.item2': 'Experiencia en administración de entornos Linux y validación de plataformas empresariales.',
            'about.item3': 'Una mentalidad analítica y autodidacta, siempre en búsqueda de aprender y aplicar nuevas tecnologías.',
            'about.item4': 'Capacidad de trabajo en equipo y liderazgo en proyectos interdisciplinarios.',
            
            // Projects
            'projects.title': 'PROYECTOS',
            'projects.demo': 'VER_DEMO',
            'projects.code': 'VER_CÓDIGO',
            
            // Skills
            'skills.title': 'HABILIDADES TÉCNICAS',
            
            // Experience
            'experience.title': 'EXPERIENCIA PROFESIONAL',

            'experience.job1_title': 'DESARROLLADOR SOFTWARE JUNIOR',
            'experience.job1_company': 'Bridgetech | Alfresco',
            'experience.job1_desc': 'Participé en proyectos de investigación, documentación y pruebas de entornos Alfresco en CentOS 8, así como en soluciones de extracción de información en Java.',
            'experience.job2_title': 'MONITOR ACADÉMICO',
            'experience.job2_company': 'Universidad Distrital Francisco José de Caldas',
            'experience.job2_desc': 'Brindé asistencia técnica en laboratorios de informática, liderando la migración y actualización de la página web institucional.',
            'experience.job3_title': 'ASISTENTE BACKOFFICE',
            'experience.job3_company': 'Atento',
            'experience.job3_desc': 'Gestión de información, análisis de datos y apoyo a distintas áreas de la organización mediante el manejo avanzado de Excel y macros.',

            
            // Contact
            'contact.title': 'CONTACTO',
            'contact.name': 'NOMBRE',
            'contact.name_placeholder': 'Ej: Carlos Rubiano',
            'contact.email': 'EMAIL',
            'contact.email_placeholder': 'Ej: carlos@ejemplo.com',
            'contact.message': 'MENSAJE',
            'contact.message_placeholder': 'Escribe tu mensaje aquí...',
            'contact.submit': 'ENVIAR MENSAJE',
            'contact.sending': 'ENVIANDO...',
            'contact.find_me': 'ENCUÉNTRAME EN:',
            'contact.footer_button': 'Contáctame',
            
            // Footer
            'footer.rights': 'Todos los derechos reservados.',
            'footer.privacy': 'Política de privacidad',
            'footer.terms': 'Términos de uso',
            'footer.sitemap': 'Mapa del sitio',
            
            // Feedback
            'feedback.success': 'Mensaje enviado correctamente. Te contactaré pronto.',
            'feedback.error_endpoint': 'Error: Debes configurar el endpoint de Formspree en el formulario.',
            'feedback.error_generic': 'Error: No se pudo enviar el mensaje. Intenta de nuevo.',
            'feedback.error_connection': 'Error de conexión. Por favor, intenta de nuevo más tarde.',
            
            // Language selector
            'lang.es': 'ES',
            'lang.en': 'EN'
        },
        
        en: {
            // Header
            'nav.about': 'ABOUT',
            'nav.projects': 'PROJECTS',
            'nav.skills': 'SKILLS',
            'nav.experience': 'EXPERIENCE',
            'nav.contact': 'CONTACT',
            'header.subtitle': 'SOFTWARE ENGINEER | BACKEND DEVELOPER',
            'header.description': 'Passionate about technology and problem-solving through software development. I specialize in backend and Linux environment administration, focusing on creating efficient and scalable solutions.',
            
            // About
            'about.title': 'ABOUT ME',
            'about.text1': 'I am a student in the final semesters of Telematics Engineering and a Data Processing Technologist, with experience in the design, development, and implementation of computer applications.',
            'about.highlights': 'I stand out for:',
            'about.item1': 'Backend programming skills and database management.',
            'about.item2': 'Experience in Linux environment administration and enterprise platform validation.',
            'about.item3': 'An analytical and self-taught mindset, always seeking to learn and apply new technologies.',
            'about.item4': 'Ability to work in teams and leadership in interdisciplinary projects.',
            
            // Projects
            'projects.title': 'PROJECTS',
            'projects.demo': 'VIEW_DEMO',
            'projects.code': 'VIEW_CODE',
            
            // Skills
            'skills.title': 'TECHNICAL SKILLS',
            
            // Experience
            'experience.title': 'PROFESSIONAL EXPERIENCE',

            'experience.job1_title': 'SOFTWARE DEVELOPER JUNIOR',
            'experience.job1_company': 'Bridgetech | Alfresco',
            'experience.job1_desc': 'I participated in research projects, documentation, and testing of Alfresco environments on CentOS 8, as well as in information extraction solutions in Java.',
            'experience.job2_title': 'ACADEMIC TUTOR',
            'experience.job2_company': 'Universidad Distrital Francisco José de Caldas',
            'experience.job2_desc': 'I provided technical assistance in computer labs, leading the migration and update of the institutional website.',
            'experience.job3_title': 'BACKOFFICE ASSISTANT',
            'experience.job3_company': 'Atento',
            'experience.job3_desc': 'Information management, data analysis, and support to different areas of the organization through advanced Excel and macro handling.',

            
            // Contact
            'contact.title': 'CONTACT',
            'contact.name': 'NAME',
            'contact.name_placeholder': 'Ex: John Doe',
            'contact.email': 'EMAIL',
            'contact.email_placeholder': 'Ex: john@example.com',
            'contact.message': 'MESSAGE',
            'contact.message_placeholder': 'Write your message here...',
            'contact.submit': 'SEND MESSAGE',
            'contact.sending': 'SENDING...',
            'contact.find_me': 'FIND ME ON:',
            'contact.footer_button': 'Contact me',
            
            // Footer
            'footer.rights': 'All rights reserved.',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.sitemap': 'Sitemap',
            
            // Feedback
            'feedback.success': 'Message sent successfully. I will contact you soon.',
            'feedback.error_endpoint': 'Error: You must configure the Formspree endpoint in the form.',
            'feedback.error_generic': 'Error: Could not send message. Please try again.',
            'feedback.error_connection': 'Connection error. Please try again later.',
            
            // Language selector
            'lang.es': 'ES',
            'lang.en': 'EN'
        }
    };

    // ===== ESTADO =====
    let currentLang = CONFIG.defaultLang;

    // ===== UTILIDADES =====
    function getStoredLang() {
        try {
            return localStorage.getItem(CONFIG.storageKey);
        } catch (e) {
            return null;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(CONFIG.storageKey, lang);
        } catch (e) {
            // localStorage no disponible
        }
    }

    function detectBrowserLang() {
        const browserLang = navigator.language || navigator.userLanguage || 'es';
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        if (CONFIG.supportedLangs.includes(langCode)) {
            return langCode;
        }
        
        // Si el idioma del navegador no es soportado, usar español por defecto
        return CONFIG.defaultLang;
    }

    function initLang() {
        const stored = getStoredLang();
        if (stored && CONFIG.supportedLangs.includes(stored)) {
            currentLang = stored;
        } else {
            currentLang = detectBrowserLang();
            storeLang(currentLang);
        }
    }

    // ===== TRADUCCIÓN =====
    function t(key) {
        const langData = translations[currentLang] || translations[CONFIG.defaultLang];
        return langData[key] || key;
    }

    function applyTranslations() {
        // Elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            
            if (translation && translation !== key) {
                // Preservar elementos hijos si existen (como iconos)
                if (el.children.length > 0 && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                    // Solo actualizar el texto manteniendo los hijos
                    const firstChild = el.firstChild;
                    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
                        firstChild.textContent = translation + ' ';
                    } else {
                        el.prepend(document.createTextNode(translation + ' '));
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            if (translation && translation !== key) {
                el.setAttribute('placeholder', translation);
            }
        });

        // Actualizar botón de idioma
        updateLangButton();
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = currentLang;
    }

    function updateLangButton() {
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            const otherLang = currentLang === 'es' ? 'en' : 'es';
            langBtn.textContent = t(`lang.${otherLang}`);
            langBtn.setAttribute('aria-label', t('lang.toggle') || `Switch to ${otherLang === 'es' ? 'Spanish' : 'English'}`);
            langBtn.setAttribute('title', t('lang.toggle') || `Switch to ${otherLang === 'es' ? 'Spanish' : 'English'}`);
        }
    }

    function switchLang(newLang) {
        if (!CONFIG.supportedLangs.includes(newLang)) {
            newLang = CONFIG.defaultLang;
        }
        
        currentLang = newLang;
        storeLang(currentLang);
        applyTranslations();
        
        // Re-renderizar proyectos si están cargados
        if (typeof window.loadProjects === 'function') {
            window.loadProjects();
        }
        
        // Re-inicializar efectos hover si existe
        if (typeof window.initHoverEffects === 'function') {
            window.initHoverEffects();
        }
    }

    // ===== UI COMPONENT =====
    function createLangButton() {
        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle';
        btn.setAttribute('aria-label', 'Switch language');
        btn.title = 'Switch language';
        
        const otherLang = currentLang === 'es' ? 'en' : 'es';
        btn.textContent = t(`lang.${otherLang}`);
        
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            switchLang(newLang);
        });
        
        return btn;
    }

    function initLangButton() {
        // Remover botón existente si hay
        const existing = document.getElementById('lang-toggle');
        if (existing) existing.remove();
        
        const btn = createLangButton();
        
        // Insertar en el header
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.appendChild(btn);
        }
    }

    // ===== INICIALIZACIÓN =====
    function init() {
        initLang();
        
        // Esperar a que el DOM esté listo si ya cargó
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                applyTranslations();
                initLangButton();
            });
        } else {
            applyTranslations();
            initLangButton();
        }
    }

    // Exponer funciones globalmente
    window.i18n = {
        t,
        switchLang,
        getCurrentLang: () => currentLang,
        getSupportedLangs: \(\) => CONFIG.supportedLangs,
        applyTranslations,
        updateLangButton
    };

    // Iniciar
    init();
})();