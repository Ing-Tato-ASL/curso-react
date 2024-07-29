import React from 'react'
import Contador from './components/Contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import HookForm from './components/HookForm';

function App() {
  return (
    <div className='container mt-5'>
      <h1>Mi primer página con React</h1>
      <HookForm />
    </div>
  );
}

export default App;