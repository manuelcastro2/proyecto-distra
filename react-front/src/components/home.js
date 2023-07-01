import './css/home.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Slider from './slider';
import Filtro from './filtro'
import Aceites from './aceites';
import Imagenes from './imagenes'
function Home() {


    const [mostrarComponente1, setMostrarComponente1] = useState(true);

    return (
        <div className='container-all'>
            <div className='banner'>
                <div className='title'>
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
                <div className='banner-img'>
                    <Slider imagenes={Imagenes}></Slider>
                </div>
            </div>
            <main className='info'>
                <div className='info-cartel'>
                    <p>servientrega</p>
                    <h3>aliados</h3>
                </div>
                <div className='info-cartel'>
                    <p>las mulas</p>
                    <h3>lubricentro</h3>
                </div>

                <button className='info-cartel' onClick={() => setMostrarComponente1(!mostrarComponente1)}>
                    {mostrarComponente1 ? (
                        <div>
                            <p>filtro gratis</p>
                            <h3>Aceites</h3>
                        </div>
                    ) : (
                        <div>
                            <p>envio gratis</p>
                            <h3>Filtros</h3>
                        </div>
                    )}
                </button>
            </main>
            <section className='filtro'>
                {mostrarComponente1 ? (
                    <div>
                        <Filtro></Filtro>
                    </div>
                ) : (
                    <div>
                        <Aceites></Aceites>
                    </div>
                )}
            </section>

        </div>

    );
};


export default Home;