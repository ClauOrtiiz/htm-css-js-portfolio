import React from "react";
import "./footer.css";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Claudia Ortiz Llamoca</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Proyectos</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contacto</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/claudiaortiz-frontend-developer/"
                        className="footer__social-link"
                        target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://www.behance.net/ortizclaudiia"
                        className="footer__social-link"
                        target="_blank">
                        <i className="uil uil-behance"></i>
                    </a>

                    <a href="https://github.com/ClauOrtiiz"
                        className="footer__social-link"
                        target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                {/* <span className="footer__copy"> by ClauOrtizLL</span> */}
            </div>
        </footer>
    )
}