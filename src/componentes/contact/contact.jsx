import React from "react";
import "./contact.css";


export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Escríbeme🙂</h2>
            <br />

            <div className="contact__container container grid">
                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">holaclaudiia@gmail.com</span>

                            <a href="Email:holaclaudiia@gmail.com" className="contact__button"> Escríbeme
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+51 993780139</span>

                            <a href="https://wa.me/51993780139?text=Hola%20Claudia," className="contact__button"> Escríbeme
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}