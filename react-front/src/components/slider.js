import React, { useState } from "react";
import './css/slider.css'

const Slider = ({ imagenes }) => {


    const [imagenActual, setimagenActual] = useState(0)
    const cantidad = imagenes?.length;
    if (!Array.isArray(imagenes) && cantidad === 0)
        return;

    let siguienteImage = () => {
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
            <div className='container-cambioDeimagenes'>
                {imagenes.map((image, index2) => {
                    return (
                        <div key={index2} className='circle'>

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Slider