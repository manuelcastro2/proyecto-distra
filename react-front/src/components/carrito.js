import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios'
import { Button, List, Snackbar, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './css/carrito.css'

const Carrito = () => {

    const scrollRef = useRef(null);
    const endpoint = 'http://localhost:8000/api/cartListar'
    const endpoint2 = 'http://localhost:8000/api/DeleteCart'
    const endpoint3 = 'http://localhost:8000/api/UpdateCart'

    const [referencia, setReferencia] = useState([])
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (counter < 4) {
                listarCarrito()
                setCounter(prevCounter => prevCounter + 1);
            }
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [counter])

    const listarCarrito = async () => {
        const response = await axios.get(endpoint)
        setReferencia(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint2}/${id}`)
        setOpen(true)
        setCounter(0)
    }

    const Aumentar = async (id) => {
        let aumento = 0;
        referencia.map((referencia) => {
            if (referencia.id == id) {
                aumento = referencia.cantidad+1
            }
        })
        await axios.put(`${endpoint3}/${id}/${aumento}`)
        setOpen2(true)
        setCounter(0)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }

    const CantidadTotal = referencia.map((cantidad) => cantidad.cantidad);
    const SumCantidadTotal = CantidadTotal.reduce((a, c) => a + c, 0)
    const PrecioTotal = referencia.map((precio) => precio.precio*precio.cantidad);
    const SumPrecioTotal = PrecioTotal.reduce((a, c) => a + c, 0)

    const Valortotal = (
        <p className='text-price'>
            {Number.parseFloat(SumPrecioTotal).toFixed(3)}
        </p>
    )

    return (

        <div className='container-all-carrito'>
            <div className='cartel'>
                <Link to={`/`}>
                    <Button sx={{ color: '#fff' }}>
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Button>
                </Link>
                <p className='title-envio'>Método de envio</p>
            </div>
            <div className='container-see-references'>
                {referencia.map((referencia, index) => (
                    <div key={index} className='container-reference-one'>
                        <div className='container-reference'>
                            <div className='img-reference'>
                            </div>
                            <div className='text-reference'>
                                {referencia.tipo + ' ' + referencia.marca + ' ' + referencia.modelo + ' ' + referencia.referencia}
                            </div>
                        </div>
                        <div className='container-reference-actions'>
                            <div className='button-actions'>
                                <button className='Button-actions' onClick={() => deleteProduct(referencia.id)}>Eliminar</button>
                                <button className='Button-actions' onClick={() => Aumentar(referencia.id)}>Añadir +1</button>
                            </div>
                        </div>
                    </div>
                ))
                }
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info">Se elimino del carrito</Alert>
                </Snackbar>
                <Snackbar open={open2} autoHideDuration={3000} onClose={handleClose2}>
                    <Alert onClose={handleClose2} severity="success">Se Aumento la cantidad</Alert>
                </Snackbar>
            </div>
            <div className='container-info-product-price-carrito'>
                <h3 className='info-product'>
                    {SumCantidadTotal + ' productos seleccionados'}
                </h3>
                <div className='division-enviar'>
                </div>
                <div className='contenedor-price'>
                    <p className='text-pago'>
                        pagas
                    </p>
                    {Valortotal}
                </div>
            </div>
        </div>
    )

}

export default Carrito;