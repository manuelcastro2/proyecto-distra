import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './css/busqueda.css'
import Encabezado from "./encabezado";
function Busqueda() {
    const endpoint1 = 'http://localhost:8000/api/referencia/'
    const endpoint2 = 'http://localhost:8000/api/referencia2/'
    const { id,marcas,modelos} = useParams();
    const [referen, setReferencia] = useState([]);
    const [filtro, setfiltro] = useState('');
    const [modelo, setmodelo] = useState('');
    const [marca, setmarca] = useState('');
    console.log('====================================');
    console.log(id,marcas,modelos);
    console.log('====================================');
    useEffect(() => {
        if(id != undefined && marcas != undefined && modelos != undefined){
        const getReferencebyForeignId = async () => {
            const response = await axios.get(`${endpoint1}${id}/${marcas}/${modelos}`);
            setReferencia(response.data);
            setfiltro(response.data.filtro);
            setmodelo(response.data.modelo);
            setmarca(response.data.marca);
        }
        getReferencebyForeignId();
    }else{
        
        const getReference2byForeignId = async () => {
            const response = await axios.get(`${endpoint2}${id}`);
            setReferencia(response.data);
            setmodelo(response.data.modelo);
            setmarca(response.data.marca);
        }
        getReference2byForeignId(); 
    }
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