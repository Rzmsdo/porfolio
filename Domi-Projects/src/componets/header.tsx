import '../styles/header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                {/* Saludo animado */}
                <div className="greeting">
                    <span className="wave">👋</span>
                    <h1>Hola, soy <span className="name-highlight">Domingo Ramírez</span></h1>
                </div>

                {/* Título profesional con efecto typewriter */}
                <div className="title-container">
                    <h3 className="title">
                        <span className="typewriter">Desarrollador Full Stack, tus proyectos con IA Generativa</span>
                    </h3>
                </div>

                {/* Descripción breve */}
                <p className="description">
                    <span>Apasionado por crear experiencias webs integrando distintas IAs con diversas funcionalidades y distintas tecnologías para lograr soluciones modernas y funcionales. </span><br />
                    <span style={{ color: '#6b7280' }}> Stack: React, Next.js, TypeScript, Python. Heramientas: Figma, Miro, Supabase</span>
                </p>

                {/* Call to action buttons */}
                <div className="cta-buttons">
                    <a href="#projects" className="btn btn-primary">
                        Ver Proyectos
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        ¿Hablamos?
                    </a>
                </div>

                {/* Social links */}
                <div className="social-links ">
                    <a href="https://github.com/Rzmsdo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/domirami" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:direzmas@gmail.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <span>Desliza hacia abajo</span>
                <div className="arrow-down"></div>
            </div>
        </header>
    );
};