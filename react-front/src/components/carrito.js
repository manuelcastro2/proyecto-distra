import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios'
import { Button, List } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './css/carrito.css'

const Carrito = () => {

    const scrollRef = useRef(null);
    const endpoint = 'http://localhost:8000/api/cartListar'

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const [referencia, setReferencia] = useState([])
    const [cantidad, setCantidad] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        listarCarrito()
        referencia.map((referencia) => {
            setTotal(total + referencia.precio)
            setCantidad(cantidad + referencia.cantidad)
        })
    }, [])
    const listarCarrito = async () => {
        const response = await axios.get(endpoint)
        setReferencia(response.data)
    }


    const deleteProduct = async (id) => {

    }


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
                {referencia.map((referencia) => (
                    <div key={referencia} className='container-reference-one'>
                        <div className='container-reference'>
                            <div className='img-reference'>
                            </div>
                            <div className='text-reference'>
                                {referencia.tipo + ' ' + referencia.marca + ' ' + referencia.modelo + ' ' + referencia.referencia}
                            </div>
                        </div>
                        <div className='container-reference-actions'>
                            <div className='button-actions'>
                                <button className='Button-actions'>Eliminar</button>
                                <button className='Button-actions'>Añadir +1</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className='container-info-product-price-carrito'>
                <h3 className='info-product'>
                    {cantidad + ' productos seleccionados'}
                </h3>
                <div className='division-enviar'>
                </div>
                <div className='contenedor-price'>
                    <p className='text-pago'>
                        pagas
                    </p>
                    <p className='text-price'>
                        {Number.parseFloat(total).toFixed(3)}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Carrito;