import { useState } from 'react'
import { Trayectoria } from './componets/trayectoria';
import { Contact } from './componets/contact';
import './styles/App.css'
import {Navbar} from './componets/navbar.tsx'
import { Header } from './componets/header.tsx'
import './styles/index.css';
import './scripts/scroll-indicator.js';
import { Projects } from './componets/projects';

 export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen'>
    
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


