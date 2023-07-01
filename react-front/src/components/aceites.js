import './css/home.css';
import { Link, json } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Colores from './palette'

const Aceites = () => {
    const endpoint = 'http://localhost:8000/api'
    const [mostrarModelo, setMostrarModelo] = useState('');
    const [mostrarMarca, setMostrarMarca] = useState('');

    const [marca, setMarcas] = useState([])
    const [modelo, setModelo] = useState([])

    const [cont2, setCont2] = useState(0);

    const top100Films = [
        { label: 'A' },
        { label: 'B' },
        { label: 'C' },
        { label: 'D' },
        { label: 'Otros' },
    ];

    useEffect(() => {
        getAllMarcas()
    }, [])

    const handleChange2 = (event) => {
        setMostrarMarca(event.target.value)
        setCont2(0)
    };

    const handleChange3 = (event) => {
        setMostrarModelo(event.target.value)
    };

    const getAllMarcas = async () => {
        const response = await axios.get(`${endpoint}/marcas2`)
        setMarcas(response.data)
    }

    const getAllModelo = async () => {
        const response = await axios.get(`${endpoint}/modelo2`, { params: { marca: mostrarMarca } });
        setModelo(response.data)
    }

    while (handleChange2 && cont2 == 0) {
        getAllModelo()
        setCont2(1)
        break;
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[900]),
        backgroundColor: indigo[900],
        fontSize: 18,
        '&:hover': {
            backgroundColor: indigo[800],
        },
    }));

    return (
        <div>
            <div className='filtro-element'>
                <h1>
                    Busca tu aceite
                </h1>
            </div>
            <div className='selects '>
                <div className='setion1'>
                    <div className='select-auto'>
                        <FormControl fullWidth>
                            <InputLabel id="input-select-Marca">Marca</InputLabel>
                            <Select
                                labelId="input-select-Marca"
                                id="select-marca"
                                label="Marca"
                                value={mostrarMarca}
                                onChange={handleChange2}
                            >
                                <MenuItem value="">
                                    Selecione
                                </MenuItem>
                                {marca.map((key2) => (
                                    <MenuItem
                                        key={key2.marca}
                                        value={key2.marca}
                                    >
                                        {key2.marca}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='setion2'>
                    <div className='select-modelo'>
                        <FormControl fullWidth>
                            <InputLabel id="input-select-Modelo">Modelo</InputLabel>
                            <Select
                                labelId="input-select-Modelo"
                                id="select-modelo"
                                label="Modelo"
                                value={mostrarModelo}
                                onChange={handleChange3}
                            >
                                <MenuItem value="">
                                    Selecione
                                </MenuItem>
                                {modelo.map((key3) => (
                                    <MenuItem
                                        key={key3.modelo}
                                        value={key3.modelo}
                                    >
                                        {key3.modelo}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='select-ano'>
                        <FormControl fullWidth>
                            <Autocomplete disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                renderInput={(params) => <TextField {...params} label="Año" />}
                            />
                        </FormControl>

                    </div>
                </div>
                <Link to="/busqueda" className='position'>
                <Colores></Colores>
                </Link>
            </div>
        </div>
    )
}

export default Aceites