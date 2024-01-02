import './App.css';
import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/myNavbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
