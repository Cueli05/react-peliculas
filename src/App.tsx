import React, {  } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import rutas from './route-config';
import Menu from './utils/menu';
import configurarValidaciones from './validaciones';

configurarValidaciones();

function App() {

  return (
    <BrowserRouter>
          <Menu />
          <div className='container'>  
          
          <Routes>
             <Route path='/prueba' element={<LandingPage/>} />

            {/*<Route path='/Generos' element={<IndiceGeneros />} /> */}
            {rutas.map(ruta=><Route key={ruta.path} path={ruta.path} element={<ruta.componente/>} />)}

          </Routes>  
          
      </div>     
      
      </BrowserRouter>
  );
}

export default App;
