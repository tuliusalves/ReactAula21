import React, { useRef, useState, useContext } from 'react';

function Componente1() {
  // 1. Criar um objeto de referência
  const inputRef = useRef(null);
  const [tempo,setTempo] = useState(0);
  const intervaloRef = useRef(null);
  
  

  const iniciar = () =>{
    intervaloRef.current = setInterval(() =>{
        setTempo(tempoAnterior => tempoAnterior +1);
    },1000);
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
  };

  const resetar = () =>{
    clearInterval(intervaloRef.current);
    setTempo(0);
  };

  const handleClick = () => {
    // 2. Acessar o elemento DOM
    inputRef.current.focus();
  };


  return (
    <div>
      <h2>Exercício 01</h2>  
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focar campo de texto</button>

      <h2>Exercício 02</h2>
      <p>Tempo:{tempo} segundos</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}

export default Componente1;