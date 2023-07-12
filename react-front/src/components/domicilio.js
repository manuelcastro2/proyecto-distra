import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Domicilio = () => {

    const [tipo, setTipo] = useState('')
    const [marcas, setMarcas] = useState('')
    const [modelos, setModelos] = useState('')
    const [referencia, setReferencia] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setTipo(state.datos.tipo);
        setMarcas(state.datos.marcas);
        setModelos(state.datos.modelos);
        setReferencia(state.datos.referencia);
        setCantidad(state.datos.cantidad);
        setPrecio(state.datos.precio);
    })

    const datos = () => {
        navigate('/envio', {
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

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#EEF1FD',
            },
            primary: {
                main: '#4B72FF'
            }
        },
    });

    return (
        <div className="container-all">
            <div className="cartel">
                <form onSubmit={datos}>
                    <button className="volver-cartel" type="submit" >
                        <ArrowBackIosIcon sx={{ color: '#fff', mt: 0.5 }}></ArrowBackIosIcon>
                    </button>
                </form>
                <p className='title-envio'>Añadir un domicilio</p>
            </div>
            <div className="caja-inputs">
                <input className="input-domicilio" type="text" placeholder="Nombre y Apellido" />
                <ThemeProvider theme={theme} >
                    <Button variant="contained" color="secondary"
                        sx={{
                            width: 315,
                            height: 52,
                            marginTop: 4,
                            border: 1,
                            borderColor: '#6B778C',
                            background: '#EEF1FD',
                            fontSize: 18,
                            fontWeight: 400,
                            color: '#6B778C',
                            textTransform: 'capitalize',
                            display: 'flex',
                            justifyContent: 'space-between',
                            boxShadow: 'none',
                        }}>
                        <div>
                            Departamento
                        </div>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={theme} >
                    <Button variant="contained" color="secondary"
                        sx={{
                            width: 315,
                            height: 52,
                            marginTop: 4,
                            border: 1,
                            borderColor: '#6B778C',
                            background: '#EEF1FD',
                            fontSize: 18,
                            fontWeight: 400,
                            color: '#6B778C',
                            textTransform: 'capitalize',
                            display: 'flex',
                            justifyContent: 'space-between',
                            boxShadow: 'none',
                        }}>
                        <div>
                            Municipio
                        </div>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Button>
                </ThemeProvider>
                <input className="input-domicilio" type="text" placeholder="Dirección" />
                <input className="input-domicilio" type="text" placeholder="Referencias adiccionales de dirección" />
                <input className="input-domicilio" type="text" placeholder="Telefono" />
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" sx={{ width: 283, height: 45, mt: 8, mb: 12 }}>
                        Continuar
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Domicilio;