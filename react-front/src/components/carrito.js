import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Carrito = () => {

    return (
        <div className='container-all'>
            <div className='cartel'>
                <Link to={`/`}>
                    <Button sx={{ color: '#fff' }}>
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Button>
                </Link>
                <p className='title-envio'>Método de envio</p>
            </div>
        </div>
    )

}

export default Carrito;