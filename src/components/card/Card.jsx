import React from "react";
import stlCard from "./Card.module.css";
import FotoCV from "../../Images/FotoHV.jpg"



export default function Card(){
    return (
        <div className={stlCard.containerCard}>
            <h2>HOJA DE VIDA</h2>
            <h2>INGENIERO MECATRONICO</h2>
            <h2>VICTOR ALEJANDRO VIDAL SILVA</h2>
            <img className={stlCard.imgFotoCV} src={FotoCV} alt="Mi imagen" />
        </div>
    );
}