import React, {Fragment, useState} from 'react'

const Contador = () => {
    const [numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero + 1);
        console.log('me diste un click');
    };

    return (
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Contador;