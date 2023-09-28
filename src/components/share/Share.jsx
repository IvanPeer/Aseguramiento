import React from "react";
import "./share.css"


export default function Share() {


  return (
    <div className='share'>
      <div className="shareWrapper">
        <center><h4>Registrar Solicitud</h4></center>
        <form action='http://localhost:3000/registro'>
        <div className="shareTop">
            <img className='shareProfileImg' src="assets/persons/11.jpg" alt="" />
            <input placeholder="Ingrese la descripción de su solicitud." className='shareInput' required="required"/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            
           <div className="shareOptions">
                <div className="shareOption">
                <input type="text" className='shareInput2' placeholder='Tipo de Equipo' required="required"/>
                </div>
            </div>
            
            <div className="shareOptions">
                <div className="shareOption">
                    <input type="text" className='shareInput2' placeholder='Modelo' required="required"/>
                </div>
            </div>
            

            <div className="shareOptions">
                <div className="shareOption">
                    <input type="number" className='shareInput2' placeholder='# Contacto' required="required"/>
                </div>
            </div>

            <div className="shareOptions">
                <div className="shareOption">
                    <input type="date" className='shareInput2' required="required"/>
                </div>
            </div>
            
            <button type="submit" className='shareButton'>Enviar</button>
        </div>
        </form>
      </div>
    </div>
  )
}
