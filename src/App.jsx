import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
import Header  from './componentes/header/Header';
import { Home } from './componentes/home/home';
import { About } from './componentes/about/about';
import { Skills } from './componentes/skills/skills';

export default function App() {
    return (
        <>
        <Header />
        <main className='main'>
            <Home />
            <About />
            <Skills />
        </main>
        </>
    )
}




// export default function App() {
//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Header />} />
//                     {/* <Route path="/register" element={<Register />} />
//             <Route path="/misNotas" element={<MisNotas />} /> */}
//                 </Routes>
//             </Router>
//         </div>
//     )
// }