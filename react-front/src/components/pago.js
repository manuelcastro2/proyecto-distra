import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './css/pago.css'

const Pago = () => {

    const [tipo, setTipo] = useState('')
    const [marcas, setMarcas] = useState('')
    const [modelos, setModelos] = useState('')
    const [referencia, setReferencia] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [nombre, setNombre] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [Municipio, setMunicipio] = useState('')
    const [direccion, setDireccion] = useState('')
    const [refernciasAdicional, setRefernciasAdicional] = useState('')
    const [telefono, setTelefono] = useState('')
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTipo(state.datos.tipo);
        setMarcas(state.datos.marcas);
        setModelos(state.datos.modelos);
        setReferencia(state.datos.referencia);
        setCantidad(state.datos.cantidad);
        setPrecio(state.datos.precio);
        setNombre(state.datos.nombre);
        setDepartamento(state.datos.departamentos);
        setMunicipio(state.datos.municipios);
        setDireccion(state.datos.direccion);
        setRefernciasAdicional(state.datos.refernciasAdicional);
        setTelefono(state.datos.telefono);
    })

    const volverEnvio = () => {
        navigate('/envio', {
            state: {
                datos: {
                    tipo: tipo,
                    marcas: marcas,
                    modelos: modelos,
                    referencia: referencia,
                    cantidad: cantidad,
                    precio: precio,
                    nombre: nombre,
                    departamentos: departamento,
                    municipios: Municipio,
                    direccion: direccion,
                    refernciasAdicional: refernciasAdicional,
                    telefono: telefono,
                }
            }
        })
    }

    return (
        <div className='container-all'>
            <div className='cartel'>
                <Button sx={{ color: '#fff' }} onClick={volverEnvio}>
                    <ArrowBackIosIcon ></ArrowBackIosIcon>
                </Button>
                <p className='title-envio'>¿Como quieres paga?</p>
            </div>
            <div className='container-options-pago'>
                <div className='contenedor-options botton'>
                    <div className='texto-options'>
                        Targeta debito
                    </div>
                    <NavigateNextIcon fontSize='large'></NavigateNextIcon>
                </div>
                <div className='contenedor-options botton'>
                    <div className='texto-options'>
                        Targeta credito
                    </div>
                    <NavigateNextIcon fontSize='large'></NavigateNextIcon>
                </div>
                <div className='contenedor-options'>
                    <div className='texto-options'>
                        PSE
                    </div>
                    <NavigateNextIcon fontSize='large'></NavigateNextIcon>
                </div>
                <div className='contenedor-options top'>
                    <div className='texto-options'>
                        Contra entrega
                    </div>
                    <NavigateNextIcon fontSize='large'></NavigateNextIcon>
                </div>
            </div>
            <div className='container-info-product-price'>
                <h3 className='info-product'>
                    {cantidad + ' ' + tipo + ' ' + marcas + ' ' + modelos + ' ' + referencia}
                </h3>
                <div className='division-enviar'>
                </div>
                <div className='contenedor-price'>
                    <p className='text-pago'>
                        pagas
                    </p>
                    <p className='text-price'>
                        {"$" + Number.parseFloat(precio).toFixed(3)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pago;