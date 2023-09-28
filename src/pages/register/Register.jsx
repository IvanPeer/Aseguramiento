import React from 'react'
import "./register.css"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Soporte Técnico</h3>
            <span className="loginDesc">
                Envia tus datos y te contactaremos para brindarte información de nuestros servicios.
            </span>
        </div>
        <div className="loginRight">
        <form action='http://localhost:3000/login'> 
            <div className="loginBox">
                <input placeholder='Nombre' className="loginInput" required/>
                <input type='email' placeholder='Correo' className="loginInput" required/>
                <input type='number' placeholder='Celular' className="loginInput" required/>
                <input placeholder='Empresa' className="loginInput" required/>
                <button type='submit' className="loginButton">Enviar</button>
                <button className='loginRgisterButton2' onClick={() => navigate("/")}>
                    Cancelar
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}
