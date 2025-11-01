(function () {
    // Crear el elemento del indicador circular
    const createIndicator = () => {
        const container = document.createElement('div');
        container.id = 'scroll-progress-circle';
        container.setAttribute('aria-hidden', 'true');
        
        container.innerHTML = `
            <svg viewBox="0 0 60 60">
                <circle class="progress-bg" cx="30" cy="30" r="25"></circle>
                <circle class="progress-bar" cx="30" cy="30" r="25"></circle>
            </svg>
            <span class="progress-text">0%</span>
        `;
        
        document.body.appendChild(container);
        return container;
    };

    const indicator = createIndicator();
    const progressBar = indicator.querySelector('.progress-bar');
    const progressText = indicator.querySelector('.progress-text');
    const circumference = 2 * Math.PI * 25; // radio = 25
    
    let ticking = false;
    let lastScrollY = 0;

    function update() {
        const el = document.scrollingElement || document.documentElement;
        const scrollTop = el.scrollTop;
        const scrollHeight = el.scrollHeight - el.clientHeight;
        const pct = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
        
        // Actualizar barra circular (stroke-dashoffset)
        const offset = circumference - (pct / 100) * circumference;
        progressBar.style.strokeDashoffset = offset;
        
        // Actualizar texto
        progressText.textContent = pct + '%';
        
        // Mostrar/ocultar según scroll position (aparece después de 100px)
        if (scrollTop > 100) {
            indicator.classList.add('visible');
        } else {
            indicator.classList.remove('visible');
        }
        
        lastScrollY = scrollTop;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Llamada inicial
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onScroll);
    } else {
        onScroll();
    }
})();