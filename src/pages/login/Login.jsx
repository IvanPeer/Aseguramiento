
import React from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Soporte Técnico</h3>
            <span className="loginDesc">
                Ingresa y realiza tus solicitudes para equipo informático.
            </span>
        </div>
        <div className="loginRight">
        <form action='http://localhost:3000/home'> 
            <div className="loginBox">
            
                <input type='email' placeholder='Email' className="loginInput" required/>
                <input type='password' placeholder='Password' className="loginInput" required/>
                <button type="submit"  className="loginButton">Ingresar</button>
                
                <button className='loginRgisterButton' onClick={() => navigate("/registro")}>
                    Solicita nuestros servicios
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}
