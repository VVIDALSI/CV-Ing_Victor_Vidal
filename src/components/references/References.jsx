import React from "react";
import stlReferences from "../references/References.module.css";


export default function References() {
    return (
        <div className={stlReferences.containerReferences}>
            <div className={stlReferences.subContainerRef}>
                <div className={stlReferences.titlesContainer}>
                    <div>
                        <h2 className={stlReferences.titProfRef}>Referencia Laboral:</h2>
                    </div>
                    <div>
                        <h2 className={stlReferences.titPerfRef}>Referencias personales:</h2>
                    </div>
                </div>
                <div className={stlReferences.referencesInf}>
                    <div className={stlReferences.profRef}>
                        <h3>Alvaro Mauricio Rojas</h3>
                        <h3>Johnson & Johnson</h3>
                        <h3>Colombia - Cali, Valle del Cauca</h3>
                        <h3>Ingeniero de mantenimiento</h3>
                        <h3>Celular: 322 248 6948</h3>
                    </div>

                    <div className={stlReferences.perRef1}>
                        <h3>Elmer Alejandro Vidal</h3>
                        <h3>Cali - Colombia</h3>
                        <h3>Ingeniero de sistemas</h3>
                        <h3>Celular: 317 704 3880</h3>
                    </div>
                    <div className={stlReferences.perRef2}>
                        <h3>Diego Arturo Perez</h3>
                        <h3>Cali - Colombia</h3>
                        <h3>Ingeniero mecatrónico</h3>
                        <h3>Celular: 317 809 2703</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}