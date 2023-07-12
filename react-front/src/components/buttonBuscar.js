import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './css/pallete.css'

const pallete = () => {

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#4B72FF',
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button color="secondary" variant='contained' className='button2'>
                    <div className='text'>
                    Buscar
                    </div>
                </Button>
            </ThemeProvider>
        </div>
    )
}

export default pallete