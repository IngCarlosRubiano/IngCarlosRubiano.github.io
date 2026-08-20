/**
 * PORTFOLIO SCRIPT - CARLOS RUBIANO
 * Optimizado y mejorado - Agosto 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== CONFIGURACIÓN GLOBAL =====
    const config = {
        hexSize: 120,
        scrollOffset: 20,
        resizeDebounce: 200,
        hexMaxDistance: 2.0
    };

    // ===== VARIABLES GLOBALES =====
    let hexagons = [];
    let animationFrameId = null;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastMouseX = mouseX;
    let lastMouseY = mouseY;
    const MOUSE_THRESHOLD = 5;

    // ===== UTILIDADES =====
    const showFeedback = (elementId, messageKey, type = 'success') => {
        const el = document.getElementById(elementId);
        if (!el) return;
        const message = typeof window.i18n !== 'undefined' && window.i18n.t 
            ? window.i18n.t(messageKey) 
            : messageKey;
        el.textContent = message;
        el.className = type === 'success' ? 'form-success' : 'form-error';
        el.style.display = 'block';
        setTimeout(() => {
            el.style.display = 'none';
            el.className = '';
        }, 5000);
    };

    // ===== SISTEMA DE HEXÁGONOS INTERACTIVOS =====
    const createHexGrid = () => {
        const container = document.getElementById('hexagon-bg');
        if (!container) return;

        container.innerHTML = '';
        hexagons = [];

        const HEX_SIZE = config.hexSize;
        const HEX_WIDTH = HEX_SIZE * 2;
        const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const cols = Math.ceil(viewportWidth / (HEX_WIDTH * 0.75)) + 2;
        const rows = Math.ceil(viewportHeight / (HEX_HEIGHT * 0.5)) + 2;

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const hexContainer = document.createElement('div');
                hexContainer.className = 'hexagon';

                const offsetX = (y % 2) * (HEX_WIDTH * 0.5);
                const posX = x * HEX_WIDTH * 0.75 - offsetX;
                const posY = y * HEX_HEIGHT * 0.5;

                hexContainer.style.setProperty('--x', `${posX}px`);
                hexContainer.style.setProperty('--y', `${posY}px`);
                hexContainer.style.setProperty('--size', `${HEX_SIZE}px`);

                const hexHighlight = document.createElement('div');
                hexHighlight.className = 'hexagon-highlight';
                hexContainer.appendChild(hexHighlight);

                container.appendChild(hexContainer);

                hexagons.push({
                    element: hexHighlight,
                    x: posX + HEX_SIZE,
                    y: posY + HEX_HEIGHT * 0.5,
                    size: HEX_SIZE,
                    baseIntensity: Math.random() * 0.05,
                    pulseOffset: Math.random() * Math.PI * 2
                });
            }
        }

        updateHighlights();
    };

    const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    const updateHighlights = () => {
        const time = Date.now() * 0.001;
        hexagons.forEach(hex => {
            const dx = mouseX - hex.x;
            const dy = mouseY - hex.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            let intensity = hex.baseIntensity;
            const maxDistance = hex.size * config.hexMaxDistance;

            if (distance < maxDistance) {
                intensity = 1 - (distance / maxDistance);
                intensity = Math.pow(intensity, 1.5);
                intensity = Math.min(1, intensity * 1.2);
            }

            // Pulso sutil para hexágonos alejados
            const pulse = Math.sin(time * 0.5 + hex.pulseOffset) * 0.02;
            intensity = Math.max(0, intensity + pulse);

            hex.element.style.setProperty('--intensity', intensity.toFixed(3));
        });
    };

    // ===== ANIMACIÓN CONTINUA DE HEXÁGONOS =====
    const startHexAnimation = () => {
        const animate = () => {
            updateHighlights();
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
    };

    // ===== SISTEMA DE SCROLL SUAVE =====
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.closest('.footer-links') || anchor.getAttribute('href') === '#') {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const target = document.querySelector(targetId);
                    if (!target) return;

                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - config.scrollOffset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    closeMobileMenu();
                });
            }
        });
    };

    // ===== SISTEMA DE MENÚ MÓVIL =====
    const initMobileMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const headerNav = document.querySelector('.header-nav');

        if (menuToggle && headerNav) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                headerNav.classList.toggle('active');
            });

            document.querySelectorAll('.header-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        closeMobileMenu();
                    }
                });
            });

            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768 &&
                    headerNav.classList.contains('active') &&
                    !headerNav.contains(e.target) &&
                    !menuToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });
        }
    };

    const closeMobileMenu = () => {
        const headerNav = document.querySelector('.header-nav');
        if (headerNav) {
            headerNav.classList.remove('active');
        }
    };

    // ===== EFECTOS DE INTERACCIÓN =====
    const initHoverEffects = () => {
        document.querySelectorAll('.project-card, .skill-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'var(--color-secondary)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'var(--color-primary)';
            });
        });

        document.querySelectorAll('.neon-button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.boxShadow = '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.boxShadow = 'none';
            });
        });
    };

    window.initHoverEffects = initHoverEffects;

    // ===== INTERSECTION OBSERVER PARA ANIMACIONES =====
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.neural-section, .project-card, .skill-card').forEach(el => {
            observer.observe(el);
        });
    };

    window.initScrollAnimations = initScrollAnimations;

    const loadProjects = async () => {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        try {
            const response = await fetch("projects.json");
            if (!response.ok) throw new Error("No se pudo cargar projects.json");
            const data = await response.json();

            if (data.projects && Array.isArray(data.projects)) {
                grid.innerHTML = "";

                data.projects.forEach(project => {
                    const card = document.createElement("div");
                    card.className = "project-card";

                    const currentLang = (typeof window.i18n !== "undefined" && window.i18n.getCurrentLang)
                        ? window.i18n.getCurrentLang()
                        : null;

                    let texts = project;
                    if (currentLang && project.translations) {
                        texts = project.translations[currentLang] || project.translations.es || project;
                    }

                    const techStackHtml = project.stack
                        .map(tech => `<span>${tech}</span>`)
                        .join("");

                    const demoButton = project.demoUrl && project.demoUrl !== "#"
                        ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="neon-button">${window.i18n.t('projects.demo')} <i class="fas fa-external-link-alt"></i></a>`
                        : "";

                    const codeButton = project.codeUrl && project.codeUrl !== "#"
                        ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="neon-button">${window.i18n.t('projects.code')} <i class="fab fa-github"></i></a>`
                        : "";

                    card.innerHTML = `
                        <div class="project-header">
                            <h3>> ${texts.title}</h3>
                            <div class="tech-tag">${texts.tech}</div>
                        </div>
                        <p>${texts.description}</p>
                        <div class="tech-stack">
                            ${techStackHtml}
                        </div>
                        <div class="project-meta">
                            <span><i class="fas fa-code"></i> Fuente: ${texts.source}</span>
                            <span><i class="fas fa-chart-line"></i> ${texts.result}</span>
                        </div>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${demoButton}
                            ${codeButton}
                        </div>
                    `;

                    grid.appendChild(card);
                });
            }
        } catch (error) {
            console.warn("Usando proyectos hardcodeados como fallback:", error.message);
            if (grid) {
                grid.innerHTML = "";
            }
            if (grid.innerHTML.trim() === "") {
                grid.innerHTML = `
                    <div class="project-card">
                        <div class="project-header">
                            <h3>> ${window.i18n.t('projects.fallback_title1')}</h3>
                            <div class="tech-tag">${window.i18n.t('projects.fallback_tech1')}</div>
                        </div>
                        <p>${window.i18n.t('projects.fallback_desc1')}</p>
                        <div class="tech-stack">
                            <span>Java</span><span>Regex</span><span>POI</span>
                        </div>
                        <div class="project-meta">
                            <span><i class="fas fa-code"></i> Fuente: ${window.i18n.t('projects.fallback_source1')}</span>
                            <span><i class="fas fa-chart-line"></i> ${window.i18n.t('projects.fallback_result1')}</span>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-header">
                            <h3>> ${window.i18n.t('projects.fallback_title2')}</h3>
                            <div class="tech-tag">${window.i18n.t('projects.fallback_tech2')}</div>
                        </div>
                        <p>${window.i18n.t('projects.fallback_desc2')}</p>
                        <div class="tech-stack">
                            <span>Java</span><span>Tesseract OCR</span><span>Image Processing</span>
                        </div>
                        <div class="project-meta">
                            <span><i class="fas fa-code"></i> Fuente: ${window.i18n.t('projects.fallback_source2')}</span>
                            <span><i class="fas fa-chart-line"></i> ${window.i18n.t('projects.fallback_result2')}</span>
                        </div>
                    </div>
                    <div class="project-card">
                        <div class="project-header">
                            <h3>> ${window.i18n.t('projects.fallback_title3')}</h3>
                            <div class="tech-tag">${window.i18n.t('projects.fallback_tech3')}</div>
                        </div>
                        <p>${window.i18n.t('projects.fallback_desc3')}</p>
                        <div class="tech-stack">
                            <span>Python</span><span>Pandas</span><span>D3.js</span><span>FastAPI</span>
                        </div>
                        <div class="project-meta">
                            <span><i class="fas fa-code"></i> Fuente: ${window.i18n.t('projects.fallback_source3')}</span>
                            <span><i class="fas fa-chart-line"></i> ${window.i18n.t('projects.fallback_result3')}</span>
                        </div>
                    </div>
                `;
            }
        }
    };

    window.loadProjects = loadProjects;

    // ===== MANEJO DEL FORMULARIO DE CONTACTO =====
    const handleContactForm = () => {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const endpoint = form.getAttribute('data-endpoint');
            const feedbackEl = document.getElementById('form-feedback');

            if (!endpoint || endpoint.includes('TU_ENDPOINT_AQUI')) {
                showFeedback('form-feedback', 'feedback.error_endpoint', 'error');
                return;
            }

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;

            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENVIANDO...';

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showFeedback('form-feedback', 'feedback.success', 'success');
                    form.reset();
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    showFeedback('form-feedback', 'feedback.error_generic', 'error');
                }
            } catch (error) {
                showFeedback('form-feedback', 'feedback.error_connection', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }
        });
    };

    // ===== SISTEMA DE RESPONSIVIDAD =====
    const initResponsiveHandlers = () => {
        let resizeTimeout;

        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                createHexGrid();
            }, config.resizeDebounce);
        });
    };

    // ===== EFECTO DE ESCRITURA MEJORADO =====
    const initTypingEffect = () => {
        document.querySelectorAll('[data-text]').forEach(element => {
            const text = element.getAttribute('data-text');
            element.textContent = '';

            let i = 0;
            const typingEffect = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 100);
        });
    };

    // ===== INICIALIZACIÓN =====
    const init = () => {
        createHexGrid();
        startHexAnimation();
        loadProjects();
        initSmoothScroll();
        initMobileMenu();
        initHoverEffects();
        initScrollAnimations();
        handleContactForm();
        initResponsiveHandlers();
        initTypingEffect();

        if (!('ontouchstart' in window)) {
            document.addEventListener('mousemove', handleMouseMove);
        }
    };

    // ===== LIMPIEZA =====
    const cleanup = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };

    init();
    window.addEventListener('beforeunload', cleanup);

    // ===== FUNCIONALIDADES ADICIONALES =====

    // Copiar tag de Discord
    window.copyDiscordTag = function(event) {
        if (event) event.stopPropagation();
        const discordTag = "CarlosDev#0000";
        navigator.clipboard.writeText(discordTag);

        const icon = event.currentTarget.querySelector('i');
        if (icon) {
            icon.classList.replace('fa-copy', 'fa-check');
            setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 2000);
        }
    };
});

// ===== POLYFILLS Y COMPATIBILIDAD =====
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}




