import React from "react";
import stlCard from "./Card.module.css";


export default function Card(){
    return (
        <div className={stlCard.container}>
            <h1>Hoja de vida</h1>
            <h2>Ing. VICTOR ALEJANDRO VIDAL</h2>
            <img src={"../public/FotoHV.jpg"} alt="Not found"/>
        </div>
    );
};