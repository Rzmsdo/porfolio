import '../styles/projects.css';
import facticiaImage from '../assets/facticia.png';
import linkupImage from '../assets/linkup.png';
import arkabloidImage from '../assets/arkabloid.jpg';
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github?: string;
    demo?: string;
    web?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Docula",
        description: "Plataforma de análisis de documentos usando IA generativa. Genera resumenes, analisis de datos y posibles vulneraciones. Incluye base de datos, pasarela de pagos y panel de administración completo. Actualmente en desarrollo",
        technologies: ["Next.js", "TypeScript", "Python", "IA generativa", "Stripe", "Supabase"],
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=500&fit=crop",
        github: "https://github.com/usuario/ecommerce-ai",
        demo: "https://demo-ecommerce.com"
    },
    {
        id: 2,
        title: "Facticia Studio app",
        description: "Plataforma para la creacion de contenido y sports publicitarios. Incluye gestion de diversos perfiles por usuario, persistencia de sesion, descargas de planificacion, creativos y spots publicitarios.",
        technologies: ["Next.js", "Typescript", "Zustand", "Python", "FastAPI", "PostgreSQL", "IAs generativas"],
        image: facticiaImage,
        web: "https://facticiastudio.com"
    },
    {
        id: 3,
        title: "Linkup",
        description: "Gestor de gastos entre particulares, familiares, amigos, ...  Ayuda a dividir y gestionar los gastos de eventos como viajes, cenas, regalos, compañeros de pisos. Incluye envío de emails para invitación a grupos, recordatorios y resumen de gastos.",
        technologies: [ "Javascript", "React", "Python", "SQLAlchemy", "FLask"],
        image: linkupImage,
        github: "https://github.com/Rzmsdo/LinkUp",
        demo: "https://sample-service-name-4h1m.onrender.com/"

    },
   {
        id: 4,
        title: "Arkabloid",
        description: "Juego para dispositivos moviles basado en el clásico Arkanoid. Incluye múltiples niveles, power-ups y tablas de clasificación. Proximamente disponible en Google Play. Actualmente en actualización.",
        technologies: [ "React Native", "Firebase", "Expo"],
        image: arkabloidImage,
        

    }
];

export const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Proyectos Destacados</h2>
                    <p className="section-subtitle">
                        Algunos de los proyectos en los que he trabajado recientemente
                    </p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <article 
                            key={project.id} 
                            className={`project-card ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
                        >
                            <div className="project-image">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="project-overlay"></div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-technologies">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <i className="fab fa-github"></i>
                                            <span>Código</span>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a 
                                            href={project.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link project-link-primary"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            <span>Demo</span>
                                        </a>
                                    )}
                                    {project.web && (
                                        <a 
                                            href={project.web} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link project-link-secondary"
                                        >
                                            <i className="fas fa-globe"></i>
                                            <span>Web</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};