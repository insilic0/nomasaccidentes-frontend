import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    height: 100px;
    background-color: #004040;
    color: white;

    h1{
        padding: 0;
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
    return (
        <TopBarContainer>
            <h1>Bienvenido: <span>Ignacio</span></h1>
            <Button>Cerrar Sesión</Button>
        </TopBarContainer>
    )
}

export default TopBar;
