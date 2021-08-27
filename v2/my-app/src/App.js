import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  NotFount404,
  Layout
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFount404 />} /> 
      </Routes>
    </div>
  );
}

export default App;
