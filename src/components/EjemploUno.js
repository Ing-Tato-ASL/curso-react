import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"

const EjemploUno = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();

    const [entradas, setEntradas] = useState([]);
    
    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([...entradas, data]);
        e.target.reset();
    };

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder='Ingrese título'
                    className='form-control my-2'
                    {
                        ...register("titulo",
                            {
                                required: "Campo obligatorio.",
                                minLength: {
                                    value: 2,
                                    message: "Mínimo 2 letras."
                                }
                            }
                        )
                    }
                />
                <span className='text-danger text-small d-block mb-2'>
                    <ErrorMessage
                      errors={errors}
                      name='titulo'
                      render={({ message }) => <p>{message}</p>}
                    />
                </span>
                <input
                    placeholder='Ingrese descripción'
                    className='form-control my-2'
                    {
                        ...register(
                            'descripcion',
                            {
                                required: 'Campo obligatorio.',
                                minLength: {
                                    value: 10,
                                    message: "Mínimo 10 letras."
                                },
                            }
                        )
                    }
                />
                <span className='text-danger text-small d-block mb-2'>
                    <ErrorMessage
                      errors={errors}
                      name='descripcion'                      
                      render={({ message }) => <p>{message}</p>}
                    />
                </span>
                <button className='btn btn-primary'>Agregar</button>
            </form>
            <ul>
                {
                    entradas.map((item, index) => 
                        <li key={index}>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default EjemploUno;