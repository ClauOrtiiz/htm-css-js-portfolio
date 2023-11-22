import React from "react";
import "./project.css";
import Proyecto1 from "../../assets/proyecto1.png"
import Proyecto2 from "../../assets/proyecto2.png"

export const Project = () => {
    return (
        <section className="project section" id="project">
            <h2 className="section__title">Proyectos</h2>
            <br />

            <div className="project__info grid">
                <div className="project__box">
                    <h3 className="project-section__title">Sitio Web Mis Notas</h3>
                    <img src={Proyecto2} alt="" className="project__img" />
                    <a href="https://mis-notas-js.vercel.app/" class="project__button">
                        Ver proyecto
                        <i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>

                <div className="project__box">
                    <h3 className="project-section__title">Sitio Web Burguer Queen</h3>
                    <img src={Proyecto1} alt="" className="project__img" />
                    <a href="https://burger-queen-api-client-iota.vercel.app/" class="project__button">
                        Ver proyecto
                        <i class="bx bx-right-arrow-alt contact__button-icon"></i></a>

                </div>

            </div>

            <div className="project__container container ">
                <a href="" className="button button--flex"> Ver más
                    <i class="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
            </div>
        </section>
    )
}