import React, { useState } from 'react'

 
const Boton = (boton, setBoton) => {

  return (
    <button className="btn btn-success mt-3" disabled={!boton} type="text">Ingresar</button>
  )
}

export default Boton