import './home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function HomeFiltros() {
    const [listExternal, setlistExternal] = useState(false);



    return (
        <div className='container-all'>
            <div className='banner'>
                <h1 className='title'>
                    soluciones en lubricacion y filtracion
                </h1>
                <div className='banner-img'>
                    <p>BANNER</p>
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

                <Link to="/homeAceites" className='info-cartel'>
                    <p>filtro gratis</p>
                    <h3>aceites</h3>
                </Link>
            </main>
            <section className='filtro'>
                <div className='filtro-element'>
                    <h1>
                        Busca tu filtro
                    </h1>
                </div>
                <div className='selects'>
                    <div className='select-uniques'>
                        <button className='select-filtro' id='tipofiltro' onClick={() => setlistExternal(!listExternal)}>
                            Tipo de filtro
                        </button>
                        <div className='img'></div>
                    </div>
                    <div className='select-uniques'>
                        <button className='select-filtro'>
                            Marca vehiculo
                        </button>
                        <div className='img'></div>
                    </div>
                    <div className='select-uniques'>
                        <button className='select-filtro'>Modelo vehiculo</button>
                        <div className='img'></div>
                    </div>
                    <div className='button-unique'>
                        <button className='button' type="">Buscar</button>
                    </div>
                </div>

            </section>
            <div className={listExternal ? "show-element" : null}>
            {listExternal &&  <div className='listExternal'>
                    <div className='list'>
                        <button className='list-exit' onClick={() => setlistExternal(!listExternal)}></button>
                        <ul>
                            <li>Filtro </li>
                            <li>Filtro</li>
                            <li>Filtro</li>
                            <li>Filtro</li>
                            <li>Filtro</li>
                            <li>Filtro</li>
                        </ul>
                    </div>
                </div>
}
            </div>
        </div>

    );
}


export default HomeFiltros;