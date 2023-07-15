import React, { useEffect, useState } from "react";
import './css/referencia.css'
import Encabezado from "./encabezado";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Alert, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Referencia = () => {

    const endpoint1 = 'http://localhost:8000/api/referencia/'
    const endpoint2 = 'http://localhost:8000/api/referencia2/'
    const endpoint3 = 'http://localhost:8000/api/cart'

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#4B72FF',
            },
        },
    });

    const navigate = useNavigate();
    const { tipo, marcas, modelos, ano, referencia } = useParams();
    const [referen, setReferencia] = useState([]);
    const [precio, setPrecio] = useState('');
    const [conversion, setConversion] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (marcas != undefined && modelos != undefined && tipo != 'Aceites') {
            getReferencebyForeignId();
        } else {
            getReference2byForeignId();
        }
    }, [])

    const getReferencebyForeignId = async () => {
        const response = await axios.get(`${endpoint1}${referencia}`);
        setReferencia(response.data);
        setPrecio(response.data[0].precio)
    }

    const getReference2byForeignId = async () => {
        const response = await axios.get(`${endpoint2}${referencia}`);
        setReferencia(response.data);
        setPrecio(response.data[0].precio)
    }

    const getAgregarCarrito = async () => {
        await axios.post(endpoint3, { tipo: tipo, marca: marcas, modelo: modelos, referencia: referencia, precio: precio, cantidad: cantidad })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const aumentar = () => {
        setConversion((precio / 3785.41) * 1000)
        setPrecio(precio + (precio) / cantidad)
        setCantidad(cantidad + 1)
    }

    const disminuir = () => {
        setConversion((precio / 3785.41) * 1000)
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
            setPrecio(precio - (precio) / cantidad)
        }
    }

    const obj = {
        tipo: tipo,
        marcas: marcas,
        modelos: modelos,
        referencia: referencia,
        cantidad: cantidad,
        precio: precio,
    }

    const envio = () => {
        navigate('/envio', { state: { datos: obj } })
    }


    if (tipo != 'Aceites') {
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
                {referen.map((referencia, index) => (
                    <div className="container-referencia">
                        <h1 className="title-referencia">
                            {
                                referencia.referencia
                            }
                        </h1>
                        <figure className="container-img-referencia">
                            <div className="img-referencia"></div>
                        </figure>
                        <div className="informacion">
                            <p className="precioReferencia">
                                {"$" + Number.parseFloat(precio).toFixed(3)}
                            </p>
                            <p className="item-conversion-referencia">
                                10.000 km de duracción
                            </p>
                            <p className="item-envio-referencia">Envio gratis</p>
                        </div>
                    </div>
                ))
                }
                <div className="container-cantidad">
                    <Button onClick={() => { disminuir() }} fullWidth>
                        <RemoveIcon sx={{ color: '#000' }}></RemoveIcon>
                    </Button>
                    <div className="container-Ncantidad">
                        {"Cantidad : " + cantidad}
                    </div>
                    <Button onClick={() => aumentar()} fullWidth>
                        <AddIcon sx={{ color: '#000' }}></AddIcon>
                    </Button>
                </div>
                <ThemeProvider theme={theme} >
                    <Button color="secondary" onClick={envio}
                        sx={{
                            position: 'relative',
                            top: 50,
                            width: 283,
                            height: 45
                        }} variant="contained">
                        <div className="text">
                            Comprar ahora
                        </div>
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button color="secondary"
                        sx={{
                            position: 'relative',
                            top: 80,
                            width: 283,
                            height: 45,
                            marginBottom: 20
                        }}
                        variant="contained"
                        onClick={() => getAgregarCarrito()}>
                        <div className="text">
                            Agregar al carrito
                        </div>
                    </Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">Se agrego al carrito</Alert>
                    </Snackbar>
                </ThemeProvider>
            </div >
        )

    } else {
        return (
            <div className="container-all">
                <Encabezado />
                <div className='container-volver'>
                    <ArrowBackIosIcon fontSize="medium" sx={{ color: '#4B72FF' }}></ArrowBackIosIcon>
                    <Link to={`/busqueda/${tipo}/${marcas}/${modelos}/${ano}`} className='volver'>Volver</Link>
                </div>
                <div className='container-title-resultado'>
                    <p className='title-resultado'>Seleccione referencia</p>
                    <p className='resultado'>{tipo + " " + marcas + " " + modelos}</p>
                </div>
                <p className='division'></p>
                <div className="container-entrega">
                    <p className="text-entrega">Entrega inmediata</p>
                </div>
                {referen.map((referencia, index) => (
                    <div className="container-referencia">
                        <h1 className="title-referencia">
                            {
                                referencia.referencia
                            }
                        </h1>
                        <figure className="container-img-referencia">
                            <div className="img-referencia"></div>
                        </figure>
                        <div className="informacion">
                            <p className="precioReferencia">
                                {"$" + Number.parseFloat(precio).toFixed(3)}
                            </p>
                            <p className="item-conversion-referencia">
                                {
                                    "$" + (Number.parseFloat((conversion)).toFixed(2)) + " por militro"
                                }
                            </p>
                            <p className="item-envio-referencia">Envio gratis</p>
                        </div>
                    </div>
                ))
                }
                <div className="container-cantidad">
                    <Button onClick={() => { disminuir() }} fullWidth>
                        <RemoveIcon sx={{ color: '#000' }}></RemoveIcon>
                    </Button>
                    <div className="container-Ncantidad">
                        {"Cantidad : " + cantidad}
                    </div>
                    <Button onClick={() => aumentar()} fullWidth>
                        <AddIcon sx={{ color: '#000' }}></AddIcon>
                    </Button>
                </div>
                <ThemeProvider theme={theme} >
                    <Button color="secondary" onClick={envio}
                        sx={{
                            position: 'relative',
                            top: 50,
                            width: 283,
                            height: 45
                        }} variant="contained">
                        <div className="text">
                            Comprar ahora
                        </div>
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <Button color="secondary"
                        sx={{
                            position: 'relative',
                            top: 80,
                            width: 283,
                            height: 45,
                            marginBottom: 20
                        }}
                        variant="contained"
                        onClick={() => getAgregarCarrito()}>
                        <div className="text">
                            Agregar al carrito
                        </div>
                    </Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">Se agrego al carrito</Alert>
                    </Snackbar>
                </ThemeProvider>
            </div >
        )
    }
}

export default Referencia;