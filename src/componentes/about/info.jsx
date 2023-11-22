import React from "react";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-award about__icon' ></i>
                <h3 className="about__title"> Experiencia  </h3>
                <span className="about__subtitle"> 8 meses </span>
            </div>

            <div className="about__box">
            <i className='bx bx-pie-chart-alt-2 about__icon' ></i>
                <h3 className="about__title"> Proyectos Desarrollo Web  </h3>
                <span className="about__subtitle"> 6 realizados </span>
            </div>

            <div className="about__box">
            <i className='bx bx-pie-chart-alt-2 about__icon' ></i>
                <h3 className="about__title"> Proyectos UX/UI  </h3>
                <span className="about__subtitle"> 4 realizados </span>
            </div>
        </div>
    )
}