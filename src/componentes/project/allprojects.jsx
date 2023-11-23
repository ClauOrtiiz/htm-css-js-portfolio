import React from "react";
import Proyecto01DEV from "../../assets/proyecto01DEV.png";
import Proyecto02DEV from "../../assets/proyecto02DEV.png";
import Proyecto03DEV from "../../assets/proyecto03DEV.png";
import Proyecto04DEV from "../../assets/proyecto04DEV.png";
import Proyecto05DEV from "../../assets/proyecto05DEV.png";
import Proyecto06DEV from "../../assets/proyecto06DEV.png";
import Proyecto01UX from "../../assets/project01-ux.png";
import Proyecto02UX from "../../assets/project02-ux.png";
import Proyecto03UX from "../../assets/project03-ux.png";
import Proyecto04UX from "../../assets/project04-ux.png";
// import "./allprojects.css";

export const Allprojects = () => {
    return (
        

            <div className="allprojects__container">
                <div className="allprojects-developer">
                    <h3 className="allproject-section__title">Programación</h3>
                    <br />

                    <div className="project__info grid">
                        <div className="project__box">
                            <h3 className="project-section__title">Sitio Web Burguer Queen</h3>
                            <img src={Proyecto01DEV} alt="" className="project__img" />
                            <a href="https://burger-queen-api-client-iota.vercel.app/" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">Sitio Web Mis Notas</h3>
                            <img src={Proyecto02DEV} alt="" className="project__img" />
                            <a href="https://mis-notas-js.vercel.app/" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">MovieStar TV</h3>
                            <img src={Proyecto03DEV} alt="" className="project__img" />
                            <a href="https://talent-movie-star-tv.vercel.app/" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">Sitio Web Emprende</h3>
                            <img src={Proyecto04DEV} alt="" className="project__img" />
                            <a href="https://social-network-dev-005.web.app/" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">CLI Library - markdown links</h3>
                            <img src={Proyecto05DEV} alt="" className="project__img" />
                            <a href="https://www.npmjs.com/package/mdlinks-ortiz" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">Sitio Web Harry Potter</h3>
                            <img src={Proyecto06DEV} alt="" className="project__img" />
                            <a href="https://clauortiiz.github.io/Harry-Potter-Static-Page-/src/" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="allprojects-designer">
                    <h2 className="allproject-section__title">Diseño UX/UI</h2>
                    <br />

                    <div className="project__info grid">
                        <div className="project__box">
                            <h3 className="project-section__title">Re Diseño Banco Banbif App </h3>
                            <img src={Proyecto01UX} alt="" className="project__img" />
                            <a href="https://www.behance.net/gallery/149626375/rediseno-App-Banbif-UXUI" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">Diseño de Armarium App</h3>
                            <img src={Proyecto02UX} alt="" className="project__img" />
                            <a href="https://www.behance.net/gallery/143673949/PROYECTO-UXUI-ARMARIUM" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div className="project__box">
                            <h3 className="project-section__title">Research Youtube Tv</h3>
                            <img src={Proyecto03UX} alt="" className="project__img" />
                            <a href="https://www.behance.net/gallery/157566495/UX-Research-YouTube-formato-TV" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="project__box">
                            <h3 className="project-section__title">UX Whiting Patitas Love</h3>
                            <img src={Proyecto04UX} alt="" className="project__img" />
                            <a href="https://www.behance.net/gallery/159165433/UX-Whiting-Patitas-Love" className="project__button">
                                Ver proyecto
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>
            </div>


    )
}