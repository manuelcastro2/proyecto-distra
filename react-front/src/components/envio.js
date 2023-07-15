import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Envio = () => {

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
        console.log(state);
    })

    const navigate = useNavigate();

    const datos = () => {
        navigate('/domicilio', {
            state: {
                datos: {
                    tipo: tipo,
                    marcas: marcas,
                    modelos: modelos,
                    referencia: referencia,
                    cantidad: cantidad,
                    precio: precio,
                }
            }
        })
    }

    const datos2 = () => {
        navigate('/domicilio', {
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

    if (nombre == undefined &&
        departamento == undefined &&
        Municipio == undefined &&
        direccion == undefined &&
        refernciasAdicional == undefined &&
        telefono == undefined) {
        return (
            <div className='container-all'>
                <div className='cartel'>
                    <Link to={`/referencia/${tipo}/${marcas}/${modelos}/${referencia}`}>
                        <Button sx={{ color: '#fff' }}>
                            <ArrowBackIosIcon></ArrowBackIosIcon>
                        </Button>
                    </Link>
                    <p className='title-envio'>Método de envio</p>
                </div>
                <div className='container-domicilio-envio'>
                    <div className='container-domicilio'>
                        <h1 className='title-domicilio'>Domicilio y telefono</h1>
                        <form onSubmit={datos} >
                            <button className='mensaje' type="submit">Añadir un domicilio de entrega</button>
                        </form>
                    </div>
                    <div className='container-o'>
                        o
                    </div>
                    <div className='container-tienda'>
                        <Button sx={{ color: '#000' }}>
                            <div className='container-title-tienda'>
                                recoge en tienda
                            </div>
                            <NavigateNextIcon fontSize='large' sx={{ color: '#858585' }}></NavigateNextIcon>
                        </Button>
                    </div>
                </div>
                <div className='container-info-product-price'>
                    <h3 className='info-product'>
                        {cantidad + 'x ' + tipo + ' ' + marcas + ' ' + modelos + ' ' + referencia}
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
    } else {
        return (
            <div className='container-all'>
                <div className='cartel'>
                    <Link to={`/referencia/${tipo}/${marcas}/${modelos}/${referencia}`}>
                        <Button sx={{ color: '#fff' }}>
                            <ArrowBackIosIcon></ArrowBackIosIcon>
                        </Button>
                    </Link>
                    <p className='title-envio'>Método de envio</p>
                </div>
                <div className='container-domicilio-envio'>
                    <div className='container-domicilio-contenido'>
                        <h1 className='title-domicilio'>Domicilio y telefono</h1>
                        <div className='contenido'>
                            {direccion + ' ' + refernciasAdicional + ' ' + departamento + ', ' + Municipio + ' - ' + nombre + ' - ' + telefono}
                        </div>
                        <form onSubmit={datos2}>
                            <button className='mensaje' type="submit">Editar</button>
                        </form>
                    </div>
                    <div className='container-tienda-spancing'>
                        <Button sx={{ color: '#000' }}>
                            <div className='container-title-tienda'>
                                Llega entre el 1 y 6 de jul. Gratis a tu domicilio
                            </div>
                            <NavigateNextIcon fontSize='large' sx={{ color: '#858585' }}></NavigateNextIcon>
                        </Button>
                    </div>
                    <div className='container-o'>
                        o
                    </div>
                    <div className='container-tienda'>
                        <Button sx={{ color: '#000' }}>
                            <div className='container-title-tienda'>
                                recoge en tienda
                            </div>
                            <NavigateNextIcon fontSize='large' sx={{ color: '#858585' }}></NavigateNextIcon>
                        </Button>
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
}

export default Envio;