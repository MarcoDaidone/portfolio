import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import QuatreCentQuatre from './pages/quatreCentquatre.js';
import Layers from './components/layers.js';

function App() {
     return (
          <Layers>
               <Routes>
                    {' '}
                    {/* Utilisez Routes pour définir vos routes */}
                    <Route path='/' element={<Home />} />{' '}
                    {/* Utilisez 'element' pour définir le composant à rendre */}
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Home />} />
               </Routes>
          </Layers>
     );
}

export default App;
