import React from 'react';
import "./skills.css";
import { Frontend } from './frontend';
import { Design } from './design';

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <br />
            {/* <span className="section__subtitle"></span> */}

            <div className="skills__container container grid">
                <Frontend />
                <Design />
            </div>
        </section>

    )
}
