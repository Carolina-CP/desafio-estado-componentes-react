import React from 'react';
import Boton from './components/Boton';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';

function App() {

  return (
  <div className="App">
  <Header title='Desafío Estado de Componentes y Eventos'/>  
  <Input/>
  <Boton/>
  </div>
  );
  }
  export default App;