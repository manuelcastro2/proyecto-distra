import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home'
import Busqueda from './components/busqueda';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/busqueda/:id/:marcas/:modelos' element={<Busqueda/>}/>
        <Route path='/busqueda/:id' element={<Busqueda/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
