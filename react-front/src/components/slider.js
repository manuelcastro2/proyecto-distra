import React, { useState } from "react";
import './css/slider.css'

const Slider = ({ imagenes }) => {

    const [imagenActual, setimagenActual] = useState(0)
    const cantidad = imagenes?.length;
    if (!Array.isArray(imagenes) && cantidad === 0)
        return;

    const siguienteImage = () => {
        setimagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1)
    }


    return (
        <div className="slider-container">
            {imagenes.map((image, index) => {
                return (
                    <div className="item" onClick={siguienteImage}>
                        {imagenActual === index && (
                            <img key={index} src={image} alt="" />
                        )}
                    </div>
                );
            })}
        </div>
    )
}

export default Slider