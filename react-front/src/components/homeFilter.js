import './home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
function HomeFiltros() {

    const [filtro, setFiltro] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')

    const handleChange = (event) => {
        setFiltro(event.target.value)
    }

    const handleChange2 = (event) => {
        setMarca(event.target.value)
    }

    const handleChange3 = (event) => {
        setModelo(event.target.value)
    }

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
                    <div className='select-uniques'>
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
                    <div className='select-uniques'>
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
                    <div className='button-unique'>
                        <Link to="/busqueda" className='button2'>
                            <Button variant="contained">Buscar</Button>
                        </Link>
                    </div>
                </div>

            </section>
        </div>

    );
}


export default HomeFiltros;