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
    type: 'Trabajo' | 'Formación' | 'Proyecto personal';
}

const experienceData: Experience[] = [
    {
        id: 1,
        company: "Desarrollo Personal",
        position: "Desarrollador Full Stack",
        period: "2025 - Presente",
        description: "Desarrollo de aplicacion web escalable con integración de IA.",
        responsibilities: [
            "Arquitectura y desarrollo de microservicios con Python y Supabase",
            "Implementación de soluciones de IA generativa para analisis de datos",            
            "Optimización de rendimiento"
        ],
        technologies: ["Next.js", "TypeScript", "Python", "Supabase", "Docker", "AI"],
        location: "Calpe, España",
        type: "Proyecto personal",
    },
    {
        id: 2,
        company: "Facticia Studio",
        position: "Desarrollador Full Stack junior",
        period: "04/2025 - 10/2025",
        description: "Desarrollo de plataforma web con integración de varias IAs.",
        responsibilities: [
            "Desarrollo y aportaciones en frontend y backend",
            "Prompt engineering para integración de IA ",
            "Participación en planificación en arquitectura del software"
        ],
        technologies: ["Python", "FastAPI", "Supabase", "IA", "Next.js", "Typescript"],
        location: "Remoto",
        type: "Trabajo"
    },
    {
        id: 3,
        company: "4Geeks Academy España",
        position: "Curso desarrollo Full Stack",
        period: "10/2024 - 03/2025",
        description: "Desarrollo de interfaces modernas y responsivas para plataforma SaaS.",
        responsibilities: [
            "Creación de componentes reutilizables con React",
            "Implementación de diseños responsive y accesibles",
            "Integración con APIs RESTful y GraphQL"
        ],
        technologies: ["React", "JavaScript", "Bootstrap", "SQLAlchemy", "Flask", "FastAPI"],
        location: "Remoto",
        type: "Formación"
    },
    {
        id: 4,
        company: "Distintas empresas",
        position: "Responsable parkings, Gerente mantenimiento",
        period: "2000 - 2024",
        description: "Primer contacto profesional desarrollando sitios web para clientes diversos.",
        responsibilities: [
            "Gestión de dos parkings, con 7 personas a cargo",
            "Gestion de mantenimiento y reparaciones de una gran cadena supermercados",
            "Mantenimiento y actualización de sitios WordPress alquileres vacacionales",
            
        ],
        technologies: ["Html", "CSS", "JavaScript", "WordPress"],
        location: "Alicante, España",
        type: "Trabajo"
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
                                    {exp.type === 'Trabajo' ? (
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