import React from 'react';
import styled from 'styled-components';

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
const Contact = () => {
    return (
        <FormContainer>
            <h1>Formulario de Contacto</h1>
            <form>
                <InputField>
                    <label htmlFor="email">Correo electronico</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                    />
                </InputField>

                <InputField>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                    />
                </InputField>

                <InputField>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        name="mensaje"
                        id="nombre"
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
