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


const Filtro = () => {
    const endpoint = 'http://localhost:8000/api'

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    const [mostrarModelo, setMostrarModelo] = useState('');
    const [filtro, setFiltro] = useState('');
    const [mostrarMarca, setMostrarMarca] = useState('');

    const [products, setProducts] = useState([])
    const [marca, setMarcas] = useState([])
    const [modelo, setModelo] = useState([])

    useEffect(() => {
        getAllFiltros()
    }, [])

    const handleChange = (event) => {
        setFiltro(event.target.value);
        setCont1(0)
        setCont2(0)
    };

    const handleChange2 = (event) => {
        setMostrarMarca(event.target.value)
        setCont2(0)
        setMostrarModelo('Selecione')
    };

    const handleChange3 = (event) => {
        setMostrarModelo(event.target.value)
    };

    const getAllFiltros = async () => {
        const response = await axios.get(`${endpoint}/filtros`)
        setProducts(response.data)
    }

    const getAllMarcas = async () => {
        const response = await axios.get(`${endpoint}/marcas`, { params: { filtro: filtro } })
        setMarcas(response.data)
    }



    const getAllModelo = async () => {
        const response = await axios.get(`${endpoint}/modelo`, { params: { marca: mostrarMarca, filtro: filtro } });
        setModelo(response.data)
    }


    while (handleChange && cont1 == 0) {
        getAllMarcas()
        setCont1(1)
        break;
    }

    while (handleChange && cont2 == 0) {
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
                    Busca tu filtro
                </h1>
            </div>
            <div className='selects'>
                <div className='select-auto'>
                    <FormControl fullWidth>
                        <InputLabel id="input-select-Filtro">Filtro</InputLabel>
                        <Select
                            labelId="input-select-Filtro"
                            id="filtro-select-small"
                            label="filtro"
                            value={filtro}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                Selecione
                            </MenuItem>
                            {products.map((key1) => (
                                <MenuItem
                                    key={key1.filtro}
                                    value={key1.filtro}
                                >
                                    {key1.filtro}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
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
                <div className='select-auto'>
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
                <Link to="/busqueda">
                    <ColorButton className='button2'>Buscar</ColorButton>
                </Link>
            </div>
        </div>
    )

}

export default Filtro