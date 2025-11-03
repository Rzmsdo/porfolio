import '../styles/navbar.css';

 export const Navbar = () => {
    return (
        <nav className="navbar fixed top-0 left-0 right-0 shadow-lg" style={{ background: 'transparent' }}>
            <ul className="navbar-links">
                <li className=''><a href="#top">Inicio</a></li>
                <li className=''><a href="#projects">Proyectos</a></li>
                <li className=''><a href="#trayectoria">Trayectoria</a></li>
                <li className=''><a href="#contact">Contacto</a></li>
            </ul>
            
        </nav>
    );
};

