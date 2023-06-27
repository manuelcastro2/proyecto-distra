import './home.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function HomeAceites() {

    const [vehiculo, setVehiculo] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')

    const handleChange = (event) => {
        setVehiculo(event.target.value)
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

                <Link to="/" className='info-cartel'>
                    <p>emvio gratis</p>
                    <h3>filtros</h3>
                </Link>
            </main>
            <section className='filtro'>
                <div className='filtro-element'>
                    <h1>
                        Busca tu aceite
                    </h1>
                </div>
                <div className='selects'>
                    <div className='setion1'>
                        <div className='select-unique'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Vehiculo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={vehiculo}
                                    label="Vehiculo"
                                    onChange={handleChange}
                                >
                                    <MenuItem value=''>None</MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='select-unique'>
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
                        <div className='select-unique2'>
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
                        <div className='select-unique3'>
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

export default HomeAceites;