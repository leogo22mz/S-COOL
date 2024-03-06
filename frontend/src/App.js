// import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.js';
import { useEffect, useState } from 'react';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';


function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/RegisterPage' element={<RegisterPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
