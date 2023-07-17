import React from "react";
import './css/home.css';
import { AppBar, Box, Divider, SwipeableDrawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography, ListItemIcon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const Encabezado = (props) => {

    const theme = createTheme({
        palette: {
            secondary: {
                main: 'rgb(208, 49, 60)',
            },
        },
    });

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navigate = useNavigate();

    const Carrito = () => {
        navigate('/carrito')
    }

    const drawer = (
        <Box sx={{ textAlign: 'center', flexGrow: 1, fontFamily: "sans-serif" }} >
            <Box sx={{ display: 'block', flexGrow: 1, background: '#111' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton edge="start"
                        sx={{ color: 'white', display: { xs: '-ms-flexbox', mb: 'flex' } }}
                        aria-label="menu"
                        onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant="h6"
                    className="text"
                    sx={{
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        top: -20,
                        fontSize: 22,
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontFamily: "Roboto",
                    }}>
                    DISTRAOIL
                </Typography>
                <Box sx={{ width: '80%', height: 50, }}>
                    <Typography variant="subtitle1"
                        sx={{ color: 'white', display: 'flex', justifyContent: 'flex-start', pl: 7 }}>
                        Ofertas
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <List >
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <ListItemButton sx={{
                        textAlign: 'left',
                        borderBottom: 1.35,
                        width: '75%',
                        borderColor: '#111',
                        ml: 3,
                        pl: 0,
                    }}>
                        <ListItemIcon>
                            <HomeOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }}></HomeOutlinedIcon>
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                            Inicio
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', mt: 1, pl: 0, }}>
                        <ListItemIcon >
                            <SearchIcon fontSize="large" sx={{ color: "#1C1B1F" }}></SearchIcon>
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Buscar
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <LocalMallOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }}></LocalMallOutlinedIcon>
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Tus compras
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <FavoriteBorderOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }}></FavoriteBorderOutlinedIcon>
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Favoritos
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <PercentOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }}></PercentOutlinedIcon>
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Ofertas
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <CarRepairOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Mantenimiento
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <LocalShippingOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Vehiculo Carga pesada
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <AirportShuttleOutlinedIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Vehiculo Carga liviana y pasajeros
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <OpacityIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Aceites
                        </Typography>
                    </ListItemButton>
                </ListItem><ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemButton sx={{ textAlign: 'left', width: '85%', pl: 0, }}>
                        <ListItemIcon >
                            <FilterAltIcon fontSize="large" sx={{ color: "#1C1B1F" }} />
                        </ListItemIcon>
                        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                            Filtros
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="secondary" className="banner">
                <Toolbar >
                    <IconButton edge="start"
                        sx={{ display: { xs: '-ms-flexbox', mb: 'flex' }, mr: 5 }}
                        color="inherit"
                        size="large"
                        aria-label="menu"
                        onClick={handleDrawerToggle}>
                        <MenuIcon fontSize="larger" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div className='img-logo'>
                        </div>
                    </Typography>
                    <form onSubmit={Carrito}>
                        <IconButton type="submit"
                            sx={{ display: { xs: '-ms-flexbox', mb: 'flex' }, ml: 6 }}
                            color="inherit" aria-label="menu" size="large">
                            <ShoppingCartIcon fontSize="larger" />
                        </IconButton>
                    </form>
                </Toolbar>
            </AppBar>
            <Box sx={{ mr: 0, p: 0 }}>
                <SwipeableDrawer
                    variant="temporary"
                    open={mobileOpen}
                    onOpen={handleDrawerToggle}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { width: '90%',mr:0},
                    }}
                >
                    {drawer}
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}

export default Encabezado;