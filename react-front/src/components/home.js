import './home.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
function Home() {

    const grupoImagenes = [];

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
      ];

      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[900]),
        backgroundColor: indigo[900],
        fontSize:18,
        '&:hover': {
          backgroundColor: indigo[800],
        },
      }));


    const [mostrarComponente1, setMostrarComponente1] = useState(true);


    return (
        <div className='container-all'>
            <div className='banner'>
                <div className='title'>
                    <Button variant='text'>
                        <div className='img-menu'>

                        </div>
                    </Button>
                    <div className='img-logo'>
                    </div>
                    <Button variant='text'>
                        <div className='img-shopping'>

                        </div>
                    </Button>
                </div>
                <div className='banner-img'>
                    <p>BANNER</p>
                </div>
            </div>
            <main className='info'>
                <div className='info-cartel'>
                    <p>servientrega</p>
                    <h3>aliados</h3>
                </div>
                <div className='info-cartel'>
                    <p>las mulas</p>
                    <h3>lubricentro</h3>
                </div>

                <button className='info-cartel' onClick={() => setMostrarComponente1(!mostrarComponente1)}>
                    {mostrarComponente1 ? (
                        <div>
                            <p>filtro gratis</p>
                            <h3>Aceites</h3>
                        </div>
                    ) : (
                        <div>
                            <p>envio gratis</p>
                            <h3>Filtros</h3>
                        </div>
                    )}
                </button>
            </main>
            <section className='filtro'>
                {mostrarComponente1 ? (
                    <div>
                        <div className='filtro-element'>
                            <h1>
                                Busca tu filtro
                            </h1>
                        </div>
                        <div className='selects'>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Filtros"/>}
                                    />
                                </FormControl>
                            </div>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Marca"/>}
                                    />
                                </FormControl>
                            </div>
                            <div className='select-auto'>
                                <FormControl fullWidth>
                                <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Modelo"/>}
                                    />
                                </FormControl>
                            </div>
                            <Link to="/busqueda">
                                <ColorButton className='button2'>Buscar</ColorButton>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='filtro-element'>
                            <h1>
                                Busca tu aceite
                            </h1>
                        </div>
                        <div className='selects aceite'>
                            <div className='setion1'>
                                <div className='select-auto'>
                                    <FormControl fullWidth>
                                    <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Marca"/>}
                                    />
                                    </FormControl>
                                </div>
                            </div>
                            <div className='setion2'>
                                <div className='select-modelo'>
                                    <FormControl fullWidth>
                                    <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Modelo"/>}
                                    />
                                    </FormControl>
                                </div>
                                <div className='select-ano'>
                                    <FormControl fullWidth>
                                    <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={top100Films}
                                    renderInput={(params)=><TextField {...params} label="Año"/>}
                                    />
                                    </FormControl>

                                </div>
                            </div>
                            <Link to="/busqueda">
                                <ColorButton variant='contained' className='button2 position'>Buscar</ColorButton>
                            </Link>
                        </div>
                    </div>
                )}
            </section>
        </div>

    );
};


export default Home;