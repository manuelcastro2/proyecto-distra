import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Modal, Typography, List, ListItem, ListItemButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Domicilio = () => {

    const [tipo, setTipo] = useState('')
    const [marcas, setMarcas] = useState('')
    const [modelos, setModelos] = useState('')
    const [referencia, setReferencia] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [nombre, setNombre] = useState('')
    const [Recibirdepartamento, setRecibirDepartamento] = useState('')
    const [RecibirMunicipio, setRecibirMunicipio] = useState('')
    const [departamento, setDepartamento] = useState('Departamentos')
    const [Municipio, setMunicipio] = useState('Municipios')
    const [direccion, setDireccion] = useState('')
    const [refernciasAdicional, setRefernciasAdicional] = useState('')
    const [telefono, setTelefono] = useState('')
    const [ano, setAno] = useState('')
    const [cont, setCont] = useState(1)

    const [openDepartamentos, setOpenDepartamentos] = useState(false);
    const handleOpenDepartamentos = () => setOpenDepartamentos(true);
    const handleCloseDepartamentos = () => setOpenDepartamentos(false);

    const [openMunicipios, setOpenMunicipios] = useState(false);
    const handleOpenMunicipios = () => setOpenMunicipios(true);
    const handleCloseMunicipios = () => setOpenMunicipios(false);

    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const agregandoDatos = async () => {

            switch (cont) {
                case 1:
                    setTipo(state.datos.tipo);
                    setMarcas(state.datos.marcas);
                    setModelos(state.datos.modelos);
                    setReferencia(state.datos.referencia);
                    setCantidad(state.datos.cantidad);
                    setPrecio(state.datos.precio);
                    setNombre(state.datos.nombre);
                    setDireccion(state.datos.direccion);
                    setRefernciasAdicional(state.datos.refernciasAdicional);
                    setTelefono(state.datos.telefono);
                    setAno(state.datos.ano)
                    console.log(state);
                    if (departamento == undefined && Municipio == undefined) {
                        setDepartamento('Departamentos');
                        setMunicipio('Municipios');
                    } else if (departamento == 'Departamentos' && Municipio == 'Municipios') {

                    } else {
                        setDepartamento(state.datos.departamentos);
                        setMunicipio(state.datos.municipios);
                    }
                    setCont(0)
                    break;
            }
        }
        agregandoDatos()
        fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json').
            then(res => res.json()).then(data => {
                setRecibirDepartamento(data)
            })
    })

    const datos = () => {
        if (nombre == undefined
            && departamento == 'Departamentos'
            && Municipio == 'Municipios'
            && direccion == undefined
            && refernciasAdicional == undefined
            && telefono == undefined) {
            navigate('/envio', {
                state: {
                    datos: {
                        tipo: tipo,
                        marcas: marcas,
                        modelos: modelos,
                        referencia: referencia,
                        cantidad: cantidad,
                        precio: precio,
                        ano: ano
                    }
                }
            })
        } else {
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
                        ano: ano,
                    }
                }
            })
        }
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


    const FiltroMunicipio = () => {
        Object.keys(Recibirdepartamento).map((item) => {
            if (Recibirdepartamento[item].departamento === departamento) {
                setRecibirMunicipio(Recibirdepartamento[item].ciudades)
            }
        })
        setMunicipio('Municipio')
    }

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
                <input className="input-domicilio"
                    type="text"
                    placeholder="Nombre y Apellido"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
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
                            color: '#111',
                            textTransform: 'capitalize',
                            display: 'flex',
                            justifyContent: 'space-between',
                            boxShadow: 'none',
                        }}
                        onClick={handleOpenDepartamentos}>
                        <div>
                            {departamento}
                        </div>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Button>
                    <Modal
                        open={openDepartamentos}
                        onClose={() => {
                            handleCloseDepartamentos()
                            FiltroMunicipio()
                        }}
                    >
                        <div className='modal-total'>
                            <div className='cartel'>
                                <Button onClick={handleCloseDepartamentos} sx={{ m: 0 }} >
                                    <ArrowBackIosIcon fontSize='medium' sx={{ color: 'white' }} />
                                </Button>
                                <h1>Departamentos</h1>
                            </div>
                            <div className='modal'>
                                <div className='center'>
                                    <div className='button-modal'>
                                        <Button fullWidth onClick={() => {
                                            handleCloseDepartamentos()
                                            FiltroMunicipio()
                                        }}
                                            sx={{ background: '#A6A5A5', pt: 0.3, pb: 0.3, mb: 3, mt: 1.5 }}>
                                        </Button>
                                    </div>
                                </div>
                                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%' }}>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <ListItemButton
                                            sx={{
                                                textAlign: 'center',
                                                width: '100%',
                                                pl: 5,
                                            }}
                                            onClick={() => {
                                                setDepartamento('Departamentos')
                                                handleCloseDepartamentos()
                                                FiltroMunicipio()
                                            }
                                            }
                                        >
                                            <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                Seleccione
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {Object.keys(Recibirdepartamento).map((item, i) => (
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                width: '100%',
                                                pl: 5,
                                            }}
                                                onClick={() => {
                                                    setDepartamento(Recibirdepartamento[item].departamento)
                                                    handleCloseDepartamentos()
                                                    FiltroMunicipio()
                                                }
                                                }
                                                key={i}
                                            >
                                                <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                    {Recibirdepartamento[item].departamento}
                                                </Typography>
                                            </ListItemButton>
                                        ))
                                        }
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Modal>
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
                            color: '#111',
                            textTransform: 'capitalize',
                            display: 'flex',
                            justifyContent: 'space-between',
                            boxShadow: 'none',
                        }}
                        onClick={() => {
                            handleOpenMunicipios()
                            FiltroMunicipio()
                        }}>
                        <div>
                            {Municipio}
                        </div>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Button>
                    <Modal
                        open={openMunicipios}
                        onClose={handleCloseMunicipios}
                    >
                        <div className='modal-total'>
                            <div className='cartel'>
                                <Button onClick={handleCloseDepartamentos} sx={{ m: 0 }} >
                                    <ArrowBackIosIcon fontSize='medium' sx={{ color: 'white' }} />
                                </Button>
                                <h1>Municipios</h1>
                            </div>
                            <div className='modal'>
                                <div className='center'>
                                    <div className='button-modal'>
                                        <Button fullWidth onClick={() => {
                                            handleCloseMunicipios()
                                        }}
                                            sx={{ background: '#A6A5A5', pt: 0.3, pb: 0.3, mb: 3, mt: 1.5 }}>
                                        </Button>
                                    </div>
                                </div>
                                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%' }}>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <ListItemButton
                                            sx={{
                                                textAlign: 'center',
                                                width: '100%',
                                                pl: 5,
                                            }}
                                            onClick={() => {
                                                setMunicipio('Municipios')
                                                handleCloseMunicipios()

                                            }
                                            }
                                        >
                                            <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                Seleccione
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {Object.keys(RecibirMunicipio).map((item, i) => (
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                width: '100%',
                                                pl: 5,
                                            }}
                                                onClick={() => {
                                                    setMunicipio(RecibirMunicipio[item])
                                                    handleCloseMunicipios()

                                                }
                                                }
                                                key={i}
                                            >
                                                <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                    {RecibirMunicipio[item]}
                                                </Typography>
                                            </ListItemButton>
                                        ))
                                        }
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Modal>
                </ThemeProvider>
                <input className="input-domicilio"
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)} />
                <input className="input-domicilio"
                    type="text"
                    placeholder="Referencias adiccionales de dirección"
                    value={refernciasAdicional}
                    onChange={(e) => setRefernciasAdicional(e.target.value)} />
                <input className="input-domicilio"
                    type="text"
                    placeholder="Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)} />
                <ThemeProvider theme={theme}>
                    <Button variant="contained"
                        color="primary"
                        sx={{ width: 283, height: 45, mt: 8, mb: 12 }}
                        onClick={datos}>
                        Continuar
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Domicilio;