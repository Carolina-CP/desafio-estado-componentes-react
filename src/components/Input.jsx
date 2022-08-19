import React from 'react';
import Boton from './Boton'
import { useState } from 'react';

const Input = () => {
  //declarar las variables 
  const [nombre, setNombre] = useState('');
  const [password, SetPasword] = useState('');
  const [boton, setBoton] = useState(false)

 const validarClave = () => {
    if (password === '252525') {
      alert('clave correcta');
    }
    };

    
  /* const validarClave = (e) => {
    if (password === '252525') {
      setBoton(true);
    } else {
      setBoton(false)
    }
    };*/



  return (
    <div className='form-group '>
     <form onChange={validarClave}>
  
        <label>Nombre</label>
        <input placeholder='Ingresa un texto' className='form-control' name='nombre' onChange={(e) => setNombre(e.target.value)}></input>
        
        <label>Contraseña</label>
        <input placeholder='Ingresa una contraseña' className='form-control' name='password' onChange={(e) => SetPasword(e.target.value)}></input>
      </form>
      <h3 className='text-black-50'>Mi nombre es: <span className="pink">{nombre}</span></h3>
      <h3 className='text-black-50'>Mi clave es: <span className="purple">{password} </span></h3>

      <span><Boton /></span>
    </div>
  )
}

export default Input