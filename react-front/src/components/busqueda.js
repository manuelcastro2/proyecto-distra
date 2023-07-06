import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './css/busqueda.css'
import Encabezado from "./encabezado";
function Busqueda() {
    const endpoint = 'http://localhost:8000/api/referencia/'
    const { id } = useParams();
    const [referen, setReferencia] = useState([]);
    const [filtro, setfiltro] = useState('');
    const [modelo, setmodelo] = useState('');
    const [marca, setmarca] = useState('');
    useEffect(() => {
        const getReferencebyForeignId = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setReferencia(response.data);
            setfiltro(response.data.filtro);
            setmodelo(response.data.modelo);
            setmarca(response.data.marca);
        }
        getReferencebyForeignId();
    }, [])
    return (
        <div className='container-all'>
            <Encabezado/>
            <div className='container-volver'>
                <div className='img-volver'></div>
                <Link to='/' className='volver'>Volver</Link>
            </div>
            <div className='container-title-resultado'>
                <p className='title-resultado'>Seleccione referencia</p>
                <p className='resultado'>{filtro + " " + marca + " " + modelo}</p>
            </div>
            <p className='division'></p>
            <div>
                {referen.map((item) => (
                    <div className="container-result">
                        <div className="result">
                            <h3
                                key={item.referencia}
                            >
                                {item.referencia}</h3>
                        </div>
                        <p className='division'></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Busqueda;