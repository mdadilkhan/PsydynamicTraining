import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Payement from './components/payementDetails'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

axios.defaults.withCredentials = true;
function App() {
  return (
    <>
     <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/payment" element={<Payement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

