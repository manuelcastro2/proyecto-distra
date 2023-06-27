import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './busqueda.css'
function Busqueda() {


    return (
        <div className='container-all'>
             <div className='banner-busqueda'>
                <h1 className='title-busqueda'>
                    soluciones en lubricacion y filtracion
                </h1>
            </div>
            <div className='container-volver'>
                <div className='img-volver'></div>
                <Link to='/homeAceites' className='volver'>volver</Link>
            </div>
        </div>
    );
}

export default Busqueda;