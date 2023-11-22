import React from "react";
import "./about.css";
import AboutImg from "../../assets/portadaa.png";
import CV from "../../assets/Claudia-Ortiz-LL.pdf";
import { Info } from "./info";

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Sobre mi</h2>
            <br />
            {/* <span className="section__subtitle"></span> */}

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Apasionada por el aprendizaje constante y la creatividad.
                        Comencé como Relacionista Público, desarrollando habilidades
                        en comunicación asertiva y trabajo en equipo, experiencia que
                        me permitió contribuir al impacto positivo en la prevención del Cáncer.
                        Decidí seguir mi pasión por el diseño y la tecnología, lo que me llevó
                        a embarcarme en cursos especializados en diseño UX/UI y
                        desarrolladora Frontend. Esta combinación de habilidades me ha otorgado
                        una comprensión profunda de cómo la tecnología y el diseño pueden crear
                        experiencias innovadoras centradas en el usuario.
                    </p>
                    <a download="" href={CV} className="button button--flex"> Descargar CV
                    <i className="uil uil-file-download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}