import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"

const HookForm = () => {
        const {
            register,
            formState: {errors},
            handleSubmit
        } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    };

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='form-control my-2'
                    {...register(
                            'singleErrorInput',
                            {
                                required: 'Título obligatorio'
                            }
                        )
                    }
                />
                <ErrorMessage
                  errors={errors}
                  name="singleErrorInput"
                  render={({ message }) => <p>{message}</p>}
                />
                <button className='btn btn-primary'>Enviar</button>
            </form>
        </Fragment>
    );
}
 
export default HookForm;