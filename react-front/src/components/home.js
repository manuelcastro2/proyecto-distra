import './css/home.css';
import React, { useState } from 'react';
import Encabezado from './encabezado';
import Filtro from './filtro'
import Aceites from './aceites';
import SlideComponent from './sliderComponent';
import Imagenes from './imagenes';
function Home() {

    const [mostrarComponente1, setMostrarComponente1] = useState(true);

    return (
        <div className='container-all'>
            <Encabezado/>
            <SlideComponent imagenes={Imagenes}/>
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