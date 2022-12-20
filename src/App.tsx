import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import {AuthState} from "./types/Auth";
import {LoginRequire} from "./components/LoginRequire";


function App() {
    LoginRequire();
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;
