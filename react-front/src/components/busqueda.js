import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './css/busqueda.css'
import Encabezado from "./encabezado";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Busqueda() {

    const endpoint1 = 'http://localhost:8000/api/busqueda/'
    const endpoint2 = 'http://localhost:8000/api/busqueda2/'

    const { tipo, marcas, modelos } = useParams();
    const [referen, setReferencia] = useState([]);

    useEffect(() => {
        if (marcas != undefined && modelos != undefined && tipo != 'Aceites') {
            const getReferencebyForeignId = async () => {
                const response = await axios.get(`${endpoint1}${marcas}/${modelos}`);
                setReferencia(response.data);
            }
            getReferencebyForeignId();
        } else {
            const getReference2byForeignId = async () => {
                const response = await axios.get(`${endpoint2}${marcas}/${modelos}`);
                setReferencia(response.data);
            }
            getReference2byForeignId();
        }
    }, [])

    return (
        <div className='container-all'>
            <Encabezado />
            <div className='container-volver'>
                <ArrowBackIosIcon fontSize="medium" sx={{ color: '#4B72FF' }}></ArrowBackIosIcon>
                <Link to='/' className='volver'>Volver</Link>
            </div>
            <div className='container-title-resultado'>
                <p className='title-resultado'>Seleccione referencia</p>
                <p className="results">{tipo + " " + marcas + " " + modelos}</p>
            </div>
            <p className='division'></p>
            <div>
                {referen.map((item) => (
                    <Link to={`/referencia/${tipo}/${marcas}/${modelos}/${item.referencia}`} className="direccion">
                        <Button className="container-result">
                            <div className="result">
                                <div className="img-result">
                                    <div className="img"></div>
                                </div>
                                <div className="item-referencia">
                                    <h3 key={item.referencia}
                                        className="title-result">
                                        {item.referencia}
                                    </h3>
                                    <div className="division3">
                                        <p className="item-precio">{"$" + Number.parseFloat(item.precio).toFixed(3)}</p>
                                        <p className="item-precioGrande">{"$" + Number.parseFloat(item.precio).toFixed(3)}</p>
                                        <p className="item-conversion">
                                            {
                                                "$" + (item.precio = Number.parseFloat(((1 * item.precio) / 3785.41) * 1000).toFixed(2)) + " por militro"}
                                        </p>
                                        <p className="item-envio">Envio gratis</p>
                                    </div>
                                </div>
                            </div>
                            <p className='division2'></p>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Busqueda;