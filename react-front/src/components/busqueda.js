import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './css/busqueda.css'
import Encabezado from "./encabezado";
function Busqueda() {
    const endpoint1 = 'http://localhost:8000/api/referencia/'
    const endpoint2 = 'http://localhost:8000/api/referencia2/'
    const { id,marcas,modelos,tipo} = useParams();
    const [referen, setReferencia] = useState([]);
    useEffect(() => {
        if(id != undefined && marcas != undefined && modelos != undefined && tipo!='Aceites'){
        const getReferencebyForeignId = async () => {
            const response = await axios.get(`${endpoint1}${id}/${marcas}/${modelos}`);
            setReferencia(response.data);
        }
        getReferencebyForeignId();
    }else{
        
        const getReference2byForeignId = async () => {
            const response = await axios.get(`${endpoint2}${id}`);
            setReferencia(response.data);
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
                <p className='resultado'>{tipo + " " + marcas + " " + modelos}</p>
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