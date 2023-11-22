import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
import Header from './componentes/header/Header';
import { Home } from './componentes/home/home';
import { About } from './componentes/about/about';
import { Skills } from './componentes/skills/skills';
import { Contact } from './componentes/contact/contact';
import { Footer } from './componentes/footer/footer';
import { Project } from './componentes/project/project';

export default function App() {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Project />
                <Contact />
                <Footer />
            </main>
        </>
    )
}


