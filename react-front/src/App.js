import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Busqueda from './components/busqueda';
import Referencia from './components/referencias';
import Envio from './components/envio';
import Domicilio from './components/domicilio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/busqueda/:tipo/:marcas/:modelos' element={<Busqueda />} />
          <Route path='/referencia/:tipo/:marcas/:modelos/:referencia' element={<Referencia />} />
          <Route path='/envio' element={<Envio />} />
          <Route path='/domicilio' element={<Domicilio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
