import React from 'react';
import '../styles/trayectoria.css';

interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    location: string;
    type: 'work' | 'education';
}

const experienceData: Experience[] = [
    {
        id: 1,
        company: "Tech Solutions S.A.",
        position: "Desarrollador Full Stack Senior",
        period: "2022 - Presente",
        description: "Liderando el desarrollo de aplicaciones web escalables con integración de IA.",
        responsibilities: [
            "Arquitectura y desarrollo de microservicios con Node.js y Python",
            "Implementación de soluciones de IA generativa para automatización",
            "Mentoría a equipo de 5 desarrolladores junior",
            "Optimización de rendimiento y reducción de costos en un 40%"
        ],
        technologies: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "OpenAI"],
        location: "Madrid, España",
        type: "work"
    },
    {
        id: 2,
        company: "Universidad Politécnica",
        position: "Ingeniería en Informática",
        period: "2018 - 2022",
        description: "Grado en Ingeniería Informática con especialización en Inteligencia Artificial.",
        responsibilities: [
            "Proyecto final: Sistema de recomendación con Deep Learning",
            "Prácticas en empresa del sector tecnológico",
            "Participación en hackathons y competiciones de programación"
        ],
        technologies: ["Python", "Machine Learning", "TensorFlow", "Java", "SQL"],
        location: "Madrid, España",
        type: "education"
    },
    {
        id: 3,
        company: "StartupLab Inc.",
        position: "Desarrollador Frontend",
        period: "2021 - 2022",
        description: "Desarrollo de interfaces modernas y responsivas para plataforma SaaS.",
        responsibilities: [
            "Creación de componentes reutilizables con React",
            "Implementación de diseños responsive y accesibles",
            "Integración con APIs RESTful y GraphQL",
            "Mejora de métricas de rendimiento web (Core Web Vitals)"
        ],
        technologies: ["React", "JavaScript", "SCSS", "GraphQL", "Jest"],
        location: "Remoto",
        type: "work"
    },
    {
        id: 4,
        company: "Digital Agency",
        position: "Desarrollador Web Junior",
        period: "2020 - 2021",
        description: "Primer contacto profesional desarrollando sitios web para clientes diversos.",
        responsibilities: [
            "Desarrollo de landing pages y sitios corporativos",
            "Maquetación responsive con HTML5, CSS3 y JavaScript",
            "Mantenimiento y actualización de sitios WordPress",
            "Colaboración con diseñadores y equipo de marketing"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
        location: "Madrid, España",
        type: "work"
    }
];

export const Trayectoria = () => {
    return (
        <section id="trayectoria" className="trayectoria-section">
            <div className="trayectoria-container">
                <div className="section-header">
                    <h2 className="section-title">Trayectoria Profesional</h2>
                    <p className="section-subtitle">
                        Mi recorrido en el mundo del desarrollo y la tecnología
                    </p>
                </div>

                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <article 
                            key={exp.id} 
                            className={`timeline-item ${exp.type}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-icon">
                                    {exp.type === 'work' ? (
                                        <i className="fas fa-briefcase"></i>
                                    ) : (
                                        <i className="fas fa-graduation-cap"></i>
                                    )}
                                </div>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div className="timeline-info">
                                        <h3 className="timeline-position">{exp.position}</h3>
                                        <h4 className="timeline-company">
                                            <i className="fas fa-building"></i>
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <div className="timeline-meta">
                                        <span className="timeline-period">
                                            <i className="far fa-calendar"></i>
                                            {exp.period}
                                        </span>
                                        <span className="timeline-location">
                                            <i className="fas fa-map-marker-alt"></i>
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="timeline-description">{exp.description}</p>

                                <div className="timeline-responsibilities">
                                    <h5>Responsabilidades y logros:</h5>
                                    <ul>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="timeline-technologies">
                                    {exp.technologies.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};