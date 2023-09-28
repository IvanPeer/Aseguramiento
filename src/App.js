import React from "react"
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
            <Route path="login" element={<Login />}></Route>
            <Route path="registro" element={<Register />}></Route>

    </Routes>
    );
    //
}

export default App;
