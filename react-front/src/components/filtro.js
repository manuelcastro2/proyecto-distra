import './css/home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Colores from './palette'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { List, Typography, ListItemButton, ListItem, Button, FormControl, Modal, IconButton } from '@mui/material';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Filtro = () => {
    const endpoint = 'http://localhost:8000/api'

    const [mostrarComponente, setMostrarComponente] = useState(false);
    const [buscarMarcas, setBusquedaMarcas] = useState('');
    const [buscarModelos, setBusquedaModelos] = useState('');

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);


    const [mostrarModelo, setMostrarModelo] = useState('modelo');
    const [idProduct, setidProduct] = useState();
    const [idMarca, setidMarca] = useState();
    const [idModelo, setidModelo] = useState();
    const [filtro, setFiltro] = useState('filtro');
    const [mostrarMarca, setMostrarMarca] = useState('marca');

    const [products, setProducts] = useState([])
    const [marca, setMarcas] = useState([])
    const [modelo, setModelo] = useState([])

    const [openFiltro, setOpenFiltro] = useState(false);
    const handleOpenFiltro = () => setOpenFiltro(true);
    const handleCloseFiltro = () => setOpenFiltro(false);

    const [openMarca, setOpenMarca] = useState(false);
    const handleOpenMarca = () => setOpenMarca(true);
    const handleCloseMarca = () => {
        setOpenMarca(false)
        setMostrarComponente(false)
        getAllMarcas()
    };

    const [openModelo, setOpenModelo] = useState(false);
    const handleOpenModelo = () => setOpenModelo(true);
    const handleCloseModelo = () => {
        setOpenModelo(false)
        setMostrarComponente(false)
        getAllModelo()
    };

    useEffect(() => {
        getAllFiltros()
    }, [])


    const getAllFiltros = async () => {
        const response = await axios.get(`${endpoint}/filtros`)
        setProducts(response.data)
    }

    const getAllMarcas = async () => {
        const response = await axios.get(`${endpoint}/marcas`, { params: { filtro: filtro } })
        setMarcas(response.data)
    }



    const getAllModelo = async () => {
        const response = await axios.get(`${endpoint}/modelo`, { params: { marca: mostrarMarca, filtro: filtro } });
        setModelo(response.data)
    }


    while (cont1 === 0) {
        getAllMarcas()
        setMostrarModelo('modelo')
        setMostrarMarca('marca')
        setCont1(1)
        break;
    }

    while (cont2 === 0) {
        getAllModelo()
        setMostrarModelo('modelo')
        setCont2(1)
        break;
    }

    const B = marca.map(
        (item) => item.marca
    )

    const C = modelo.map(
        (item) => item.modelo
    )

    const busquedaMarcas = () => {
        B.map((marcas) => {
            if (marcas == buscarMarcas) {
                setMarcas(Array.isArray(marcas) ? marcas : [{ marca: buscarMarcas }])
            } else if ('' == buscarMarcas) {
                getAllMarcas()
            }
        }
        )
    }

    const busquedaModelo = () => {
        C.map((modelos) => {
            if (modelos == buscarModelos) {
                setModelo(Array.isArray(modelos) ? modelos : [{ modelo: buscarModelos }])
            } else if ('' == buscarModelos) {
                getAllModelo()
            }
        }
        )
    }



    return (
        <div>
            <div className='filtro-element'>
                <h1>
                    Busca tu filtro
                </h1>
            </div>
            <div className='selects'>
                <div className='select-auto'>
                    <FormControl fullWidth>
                        <Button
                            variant='outlined'
                            sx={{
                                border: 1,
                                p: 1.5,
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderColor: "#6B778C",
                                color: '#111',
                                backgroundColor: '#F5F5F5'
                            }}
                            onClick={handleOpenFiltro}>
                            <div className='text'>{filtro}</div>
                            <ArrowDropDownIcon />
                        </Button>
                    </FormControl>
                    <Modal
                        open={openFiltro}
                        onClose={handleCloseFiltro}
                    >
                        <div className='modal-total'>
                            <div className='cartel'>
                                <Button onClick={handleCloseFiltro} sx={{ m: 0 }} >
                                    <ArrowBackIosIcon fontSize='medium' sx={{ color: 'white' }} />
                                </Button>
                                <h1>Filtros</h1>
                            </div>
                            <div className='modal'>
                                <div className='center'>
                                    <div className='button-modal'>
                                        <Button fullWidth onClick={() => {
                                            handleCloseFiltro()
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
                                                width: '75%',
                                                pl: 5,
                                            }}
                                            onClick={() => {
                                                setFiltro('filtro')
                                                setCont1(0)
                                                setCont2(0)
                                                handleCloseFiltro()

                                            }
                                            }
                                        >
                                            <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                Seleccione
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {products.map((item, i) => (
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                width: '75%',
                                                pl: 5,
                                            }}
                                                onClick={() => {
                                                    setFiltro(item.filtro)
                                                    setCont1(0)
                                                    setCont2(0)
                                                    handleCloseFiltro()

                                                }
                                                }
                                                key={i}
                                            >
                                                <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                    {item.filtro}
                                                </Typography>
                                            </ListItemButton>
                                        ))
                                        }
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className='select-auto'>
                    <FormControl fullWidth>
                        <Button
                            variant='outlined'
                            sx={{
                                border: 1,
                                p: 1.5,
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderColor: "#6B778C",
                                color: '#111',
                                backgroundColor: '#F5F5F5'
                            }}
                            onClick={handleOpenMarca}>
                            <div className='text'>{mostrarMarca}</div>
                            <ArrowDropDownIcon />
                        </Button>
                    </FormControl>
                    <Modal
                        open={openMarca}
                        onClose={handleCloseMarca}

                    >
                        <div>
                            <div className='cartel'>
                                <Button onClick={() =>
                                    handleCloseMarca()
                                }
                                    sx={{ m: 0 }} >
                                    <ArrowBackIosIcon fontSize='medium' sx={{ color: 'white' }} />
                                </Button>
                                <h1>Filtros</h1>
                                {mostrarComponente ? (
                                    <div className='busqueda'>
                                        <Button onClick={() => setMostrarComponente(!mostrarComponente)} sx={{ m: 0 }} >
                                            <ArrowBackIosIcon fontSize='medium' sx={{ color: 'black' }} />
                                        </Button>
                                        <input type='text' className='input'
                                            onChange={(e) => setBusquedaMarcas(e.target.value)}
                                            placeholder='Buscar en distraoil'
                                        />
                                        <IconButton sx={{ mr: 1 }} onClick={busquedaMarcas}>
                                            <SearchIcon fontSize='large' sx={{ color: '#000' }} />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <div className='button-buscar'>
                                        <IconButton sx={{ mr: 1 }} onClick={() => setMostrarComponente(!mostrarComponente)}>
                                            <SearchIcon fontSize='large' sx={{ color: 'white' }} />
                                        </IconButton>
                                    </div>
                                )}

                            </div>
                            <div className='modal2'>
                                <div className='center'>
                                    <div className='button-modal'>
                                        <Button fullWidth onClick={handleCloseMarca} sx={{ background: '#A6A5A5', pt: 0.3, pb: 0.3, mb: 3, mt: 1.5 }}>
                                        </Button>
                                    </div>
                                </div>
                                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%' }}>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <ListItemButton
                                            sx={{
                                                textAlign: 'center',
                                                width: '75%',
                                                pl: 5,
                                            }}
                                            onClick={() => {
                                                setMostrarMarca('marca')
                                                setCont2(0)
                                                handleCloseMarca()
                                            }
                                            }
                                        >
                                            <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                Seleccione
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {marca.map((marcas, i) => (
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                width: '75%',
                                                pl: 5,
                                            }}
                                                onClick={() => {
                                                    setMostrarMarca(marcas.marca)
                                                    setidMarca(marcas.marca)
                                                    setCont2(0)
                                                    handleCloseMarca()
                                                }}
                                                key={marcas.i}>
                                                <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                    {marcas.marca}
                                                </Typography>
                                            </ListItemButton>
                                        ))
                                        }
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className='select-auto'>
                    <FormControl fullWidth>
                        <Button
                            variant='outlined'
                            sx={{
                                border: 1,
                                p: 1.5,
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderColor: "#6B778C",
                                color: '#111',
                                backgroundColor: '#F5F5F5'
                            }}
                            onClick={handleOpenModelo}>
                            <div className='text'>{mostrarModelo}</div>
                            <ArrowDropDownIcon />
                        </Button>
                    </FormControl>
                    <Modal
                        open={openModelo}
                        onClose={handleCloseModelo}

                    >
                        <div>
                            <div className='cartel'>
                                <Button onClick={handleCloseModelo} sx={{ m: 0 }} >
                                    <ArrowBackIosIcon fontSize='medium' sx={{ color: 'white' }} />
                                </Button>
                                <h1>Filtros</h1>
                                {mostrarComponente ? (
                                    <div className='busqueda'>
                                        <Button onClick={() => setMostrarComponente(!mostrarComponente)} sx={{ m: 0 }} >
                                            <ArrowBackIosIcon fontSize='medium' sx={{ color: 'black' }} />
                                        </Button>
                                        <input type='text' className='input'
                                            onChange={(e) => setBusquedaModelos(e.target.value)}
                                            placeholder='Buscar en distraoil'
                                        />
                                        <IconButton sx={{ mr: 1 }} onClick={busquedaModelo}>
                                            <SearchIcon fontSize='large' sx={{ color: '#000' }} />
                                        </IconButton>
                                    </div>
                                ) : (
                                    <div className='button-buscar'>
                                        <IconButton sx={{ mr: 1 }} onClick={() => setMostrarComponente(!mostrarComponente)}>
                                            <SearchIcon fontSize='large' sx={{ color: 'white' }} />
                                        </IconButton>
                                    </div>
                                )}

                            </div>
                            <div className='modal2'>
                                <div className='center'>
                                    <div className='button-modal'>
                                        <Button fullWidth onClick={handleCloseModelo} sx={{ background: '#A6A5A5', pt: 0.3, pb: 0.3, mb: 3, mt: 1.5 }}>
                                        </Button>
                                    </div>
                                </div>
                                <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', overflow: 'auto', width: '100%' }}>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <ListItemButton
                                            sx={{
                                                textAlign: 'center',
                                                width: '75%',
                                                pl: 5,
                                            }}
                                            onClick={() => {
                                                setMostrarModelo('modelo')
                                                handleCloseModelo()
                                            }
                                            }
                                        >
                                            <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                Seleccione
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {modelo.map((modelo, i) => (
                                            <ListItemButton sx={{
                                                textAlign: 'center',
                                                width: '75%',
                                                pl: 5,
                                            }}
                                                onClick={() => {
                                                    setMostrarModelo(modelo.modelo)
                                                    setidProduct(modelo.id)
                                                    setidModelo(modelo.modelo)
                                                    handleCloseModelo()
                                                }
                                                }
                                                key={modelo.modelo}>
                                                <Typography sx={{ fontSize: 20, fontWeight: 400, textTransform: 'capitalize' }}>
                                                    {modelo.modelo}
                                                </Typography>
                                            </ListItemButton>
                                        ))
                                        }
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Modal>
                </div>
                <Link to={`/busqueda/${filtro}/${idMarca}/${idModelo}`}>
                    <Colores></Colores>
                </Link>
                <Input autoComplete=''></Input>
            </div>
        </div>
    )

}

export default Filtro