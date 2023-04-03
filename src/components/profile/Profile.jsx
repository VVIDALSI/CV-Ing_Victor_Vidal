import React from "react";
import stlProfile from "./Profile.module.css";
import FotoCV from "../../Images/FotoHV.svg"


export default function Profile() {
    return (
        <div className={stlProfile.containerProfile}>
            <div className={stlProfile.profile}>
                <img className={stlProfile.imgFotoCV} src={FotoCV} alt="Mi imagen" />
                <div>
                    <h2>Perfil profesional:</h2>
                    <p>
                        Soy un ingeniero mecatrónico con más de 11 años de experiencia en gerencia de proyecto bajo la metodologia PMI, proyectos HVAC y proyectos de robótica, así como en diseño industrial en sistemas CAD 2D y 3D.

                        Mi experiencia me ha permitido desarrollar habilidades en liderazgo y trabajo en equipo. Soy una persona proactiva, analítica y creativa, capaz de encontrar soluciones innovadoras y eficientes para cada proyecto en el que participo.
                    </p>
                </div>
            </div>
        </div>
    );
}