import React, {useState} from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const FormContainer = styled.div`
    text-align: center;
    background-color: gray;
    color: white;
    h1{
        margin-bottom: 20px;
    }

`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    input{
        width: 260px;
        height: 40px;
        border: 1px solid black;
        border-radius: 5px;
    }

    label{
       padding: 10px;
    }

    textarea{
        width: 260px;
        border-radius: 5px;
        height: 200px;
    }

    input[type=submit]{
        height: 40px;
        background-color: transparent;
        transition: .5s ease;
        width: 200px;

        &:hover{
            background-color: black;
            color: white;
        }
    }
`;
const Contact = ({formRef}) => {

    const [contact, setContact] = useState({
        email:'',
        nombre:'',
        mensaje:''
    });

    const {email, nombre, mensaje} = contact;


    const handleChange = e =>{
        setContact({
            ...contact,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(email===''||nombre===''||mensaje===''){
            Swal.fire(
                'Ups!',
                'Debes completar todos los campos',
                'error'
            );
            return;
        }

        Swal.fire(
            'Enhorabuena!, Contacto enviado correctamente',
            'Recibirás una respuesta a la brevedad',
            'success'
        );
        setContact({
            email:'',
            nombre:'',
            mensaje:''
        })
    }

    return (
        <FormContainer >
            <h1 ref={formRef}>Formulario de Contacto</h1>
            <form
                onSubmit={handleSubmit}
            >
                <InputField>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </InputField>

                <InputField>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </InputField>

                <InputField>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        name="mensaje"
                        id="nombre"
                        value={mensaje}
                        onChange={handleChange}
                    >
                    </textarea>
                </InputField>

                <InputField>
                    <input
                    type="submit"
                    value="Enviar"                  
                    >
                    </input>
                </InputField>
            </form>
        </FormContainer>
    )
}

export default Contact;
