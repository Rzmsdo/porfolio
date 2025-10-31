import React from 'react';
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
                    <h2 className="title">
                        <span className="typewriter">Desarrollador Full Stack, usando IA Generativa</span>
                    </h2>
                </div>

                {/* Descripción breve */}
                <p className="description">
                    Apasionado por crear experiencias web modernas y funcionales. 
                    Especializado en React, TypeScript y diseño responsivo.
                </p>

                {/* Call to action buttons */}
                <div className="cta-buttons">
                    <a href="#projects" className="btn btn-primary">
                        Ver Proyectos
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contáctame
                    </a>
                </div>

                {/* Social links */}
                <div className="social-links">
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:tu-email@example.com" aria-label="Email">
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