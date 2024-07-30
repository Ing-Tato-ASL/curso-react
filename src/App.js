import React from 'react'
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
    const sujeto = [
        {
            nombre: 'Juanito',
            urlImagen: 'https://via.placeholder.com/64',
            texto: '1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
            nombre: 'Pedrito',
            urlImagen: 'https://via.placeholder.com/64',
            texto: '2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        }
    ];

  return (
    <div className='container mt-5'>
      <h1>Mi primer página con React</h1>
      <Saludo persona='Juanito' />
      <Saludo persona='Ignacio' />
      <Saludo persona='Catalina' />
      <Comentario sujeto={sujeto[0]} />
      <Comentario sujeto={sujeto[1]} />
    </div>
  );
}

export default App;