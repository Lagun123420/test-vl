import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;