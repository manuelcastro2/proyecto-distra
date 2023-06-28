import './home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Home() {

    const grupoImagenes = [];


    const [mostrarComponente1, setMostrarComponente1] = useState(true);
    const [filtro, setFiltro] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')

    const handleChange = (event) => {
        setFiltro(event.target.value)
    }

    const handleChange2 = (event) => {
        setMarca(event.target.value)
    }

    const handleChange3 = (event) => {
        setModelo(event.target.value)
    }

    const handleChange4 = (event) => {
        setAno(event.target.value)
    }


    return (
        <div className='container-all'>
            <div className='banner'>
                <div className='title'>
                    <div className='img-menu'>

                    </div>
                    <div className='img-logo'>
                    </div>
                    <div className='img-shopping'>

                    </div>
                </div>
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
                        <div className='filtro-element'>
                            <h1>
                                Busca tu filtro
                            </h1>
                        </div>
                        <div className='selects'>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">filtros</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={filtro}
                                        label="Tipo de filtros"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value=''>None</MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                    <InputLabel id="marca-label">Marca</InputLabel>
                                    <Select
                                        labelId="marca-label"
                                        id="marca-select"
                                        value={marca}
                                        label="Marca de vehiculo"
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value=''>None</MenuItem>
                                        <MenuItem value={10}>citroen</MenuItem>
                                        <MenuItem value={20}>ford</MenuItem>
                                        <MenuItem value={30}>mercedes</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                    <InputLabel id="marca-label">Modelo</InputLabel>
                                    <Select
                                        labelId="marca-label"
                                        id="marca-select"
                                        value={modelo}
                                        label="Modelo de vehiculo"
                                        onChange={handleChange3}
                                    >
                                        <MenuItem value=''>None</MenuItem>
                                        <MenuItem value={10}>citroen</MenuItem>
                                        <MenuItem value={20}>ford</MenuItem>
                                        <MenuItem value={30}>mercedes</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <Link to="/busqueda">
                                <button className='button2'>Buscar</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='filtro-element'>
                            <h1>
                                Busca tu aceite
                            </h1>
                        </div>
                        <div className='selects aceite'>
                            <div className='setion1'>
                                <div className='select-auto'>
                                    <FormControl fullWidth>
                                        <InputLabel id="marca-label">Marca</InputLabel>
                                        <Select
                                            labelId="marca-label"
                                            id="marca-select"
                                            value={marca}
                                            label="Marca"
                                            onChange={handleChange2}
                                        >
                                            <MenuItem value=''>None</MenuItem>
                                            <MenuItem value={10}>citroen</MenuItem>
                                            <MenuItem value={20}>ford</MenuItem>
                                            <MenuItem value={30}>mercedes</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='setion2'>
                                <div className='select-modelo'>
                                    <FormControl fullWidth>
                                        <InputLabel id="marca-label">Modelo</InputLabel>
                                        <Select
                                            labelId="marca-label"
                                            id="marca-select"
                                            value={modelo}
                                            label="Modelo"
                                            onChange={handleChange3}
                                        >
                                            <MenuItem value=''>None</MenuItem>
                                            <MenuItem value={10}>pick up</MenuItem>
                                            <MenuItem value={20}>ranger</MenuItem>
                                            <MenuItem value={30}>sedan</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className='select-ano'>
                                    <FormControl fullWidth>
                                        <InputLabel id="marca-label">Año</InputLabel>
                                        <Select
                                            labelId="marca-label"
                                            id="marca-select"
                                            value={ano}
                                            label="Año"
                                            onChange={handleChange4}
                                        >
                                            <MenuItem value=''>None</MenuItem>
                                            <MenuItem value={10}>2012</MenuItem>
                                            <MenuItem value={20}>2002</MenuItem>
                                            <MenuItem value={30}>2020</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>
                            </div>
                            <Link to="/busqueda">
                                <button className='button2 position'>Buscar</button>
                            </Link>
                        </div>
                    </div>
                )}
            </section>
        </div>

    );
};


export default Home;