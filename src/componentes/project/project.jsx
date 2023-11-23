import React from "react";
import "./project.css";
// import Proyecto1 from "../../assets/proyecto1.png"
// import Proyecto2 from "../../assets/proyecto2.png"
import { Allprojects } from "./allprojects"

export const Project = () => {
    return (
        <section className="project section container" id="project">
            <h2 className="section__title">Proyectos</h2>
            <Allprojects />


            {/* <div className="project__info grid">
                <div className="project__box">
                    <h3 className="project-section__title">Sitio Web Mis Notas</h3>
                    <img src={Proyecto2} alt="" className="project__img" />
                    <a href="https://mis-notas-js.vercel.app/" className="project__button">
                        Ver proyecto
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                </div>

                <div className="project__box">
                    <h3 className="project-section__title">Sitio Web Burguer Queen</h3>
                    <img src={Proyecto1} alt="" className="project__img" />
                    <a href="https://burger-queen-api-client-iota.vercel.app/" className="project__button">
                        Ver proyecto
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                </div>

            </div>

            <div className="project__container container ">
                <a href="" className="button button--flex"> Ver más
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
            </div> */}
        </section>
    )
}