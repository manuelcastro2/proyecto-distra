import React, { useEffect, useState } from "react";
import './css/referencia.css'
import Encabezado from "./encabezado";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Referencia = () => {

    const endpoint1 = 'http://localhost:8000/api/referencia/'
    const endpoint2 = 'http://localhost:8000/api/referencia2/'

    const { tipo, marcas, modelos, referencia } = useParams();
    const [referen, setReferencia] = useState([]);

    useEffect(() => {
        if (marcas != undefined && modelos != undefined && tipo != 'Aceites') {
            const getReferencebyForeignId = async () => {
                const response = await axios.get(`${endpoint1}${referencia}`);
                setReferencia(response.data);
            }
            getReferencebyForeignId();
        } else {
            const getReference2byForeignId = async () => {
                const response = await axios.get(`${endpoint2}${referencia}`);
                setReferencia(response.data);
            }
            getReference2byForeignId();
        }
    }, [])
    console.log('====================================');
    console.log(referen);
    console.log('====================================');

    return (
        <div className="container-all">
            <Encabezado />
            <div className='container-volver'>
                <ArrowBackIosIcon fontSize="medium" sx={{ color: '#4B72FF' }}></ArrowBackIosIcon>
                <Link to={`/busqueda/${tipo}/${marcas}/${modelos}`} className='volver'>Volver</Link>
            </div>
            <div className='container-title-resultado'>
                <p className='title-resultado'>Seleccione referencia</p>
                <p className='resultado'>{tipo + " " + marcas + " " + modelos}</p>
            </div>
            <p className='division'></p>
            <div className="container-entrega">
                <p className="text-entrega">Entrega inmediata</p>
            </div>
        </div>
    )
}

export default Referencia;