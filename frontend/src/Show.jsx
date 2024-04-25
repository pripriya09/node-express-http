import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ShowData from './ShowData';
import Header from './Header';

function Show() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Show" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Show;
