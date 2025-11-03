import { Trayectoria } from './componets/trayectoria';
import { Contact } from './componets/contact';
import './styles/App.css'
import {Navbar} from './componets/navbar.tsx'
import { Header } from './componets/header.tsx'
import './styles/index.css';
import './scripts/scroll-indicator.js';
import { Projects } from './componets/projects';

 export function App() {

  return (
    <>
    <div style={{ minHeight: '100vh' }}>
    
    <Navbar />
    <div id="scroll-progress" aria-hidden="true"></div>
    <Header />
    <Projects />
    <Trayectoria />
    <Contact />

    </div>
    </>
  )
}


