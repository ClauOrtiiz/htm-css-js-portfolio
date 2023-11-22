import React from "react";


export const Card = () => {
    return (
        <section className="card section" id="project">
            <h3 className="section__title">Proyectos</h3>
            <br />
            {/* <span className="section__subtitle"></span> */}

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">


                    <a download="" href={CV} className="button button--flex"> Descargar CV
                        <i className="uil uil-file-download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}