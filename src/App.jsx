import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React from 'react';
import Header from './componentes/header/Header';
import './App.css';

// export default function App() {
//     return (
//         <>
//         <Header />
//         </>
//     )
// }

// export default App


export default function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    {/* <Route path="/register" element={<Register />} />
            <Route path="/misNotas" element={<MisNotas />} /> */}
                </Routes>
            </Router>
        </div>
    )
}