import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './css/busqueda.css'
function Busqueda() {


    return (
        <div className='container-all'>
            <div className='banner-busqueda'>
                <div className='title-busqueda'>
                    <Button variant='text'>
                        <div className='img-menu'>

                        </div>
                    </Button>
                    <div className='img-logo'>
                    </div>
                    <Button variant='text'>
                        <div className='img-shopping'>

                        </div>
                    </Button>
                </div>
            </div>
            <div className='container-volver'>
                <div className='img-volver'></div>
                <Link to='/' className='volver'>Volver</Link>
            </div>
            <div className='container-title-resultado'>
                <p className='title-resultado'>Seleccione referencia</p>
                <p className='resultado'>Aceite Carga Pesada 15w 40</p>
            </div>
            <p className='division'></p>
        </div>
    );
}

export default Busqueda;