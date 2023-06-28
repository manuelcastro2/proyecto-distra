import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeFilter from './components/home'
import Busqueda from './components/busqueda';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeFilter/>}/>
        <Route path='/busqueda' element={<Busqueda/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
