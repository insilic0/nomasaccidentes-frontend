import React, {useContext} from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/autenticacion/authContext';

const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    height: 100px;
    background-color: #1F4172;
    color: white;

    h1{
        padding: 0;
    }
    @media(max-width:768px){
        h1{
            font-size: 20px;
        }
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: 1px solid gray;
    height: 40px;
    border-radius: 12px;
    color: white;
    transition: 250ms ease;

    &:hover{
        color: black;
        background-color: white ;
    }
`;

const TopBar = () => {

    const authContext = useContext(AuthContext);
    const {usuario, cerrarSesion} = authContext;

    return (
        <TopBarContainer>
            <h1>Bienvenido: <span>{usuario ? (`${usuario.nombre_out} ${usuario.apellido_out}`) : null}</span></h1>
            <Button onClick={()=> cerrarSesion()}>Cerrar Sesión</Button>
        </TopBarContainer>
    )
}

export default TopBar;
