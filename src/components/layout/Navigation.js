import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthState from '../../context/autenticacion/authState';

const HeaderContainer = styled.header`
    display: flex;
    padding: 1.3rem;
    background-color: #1F4172;
    position : relative;
    z-index: 9999;

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`;

const NavNavigation = styled.nav`
    display: flex;
    a:last-child{
        margin: 0 auto;
    }
`;

const StyledImg = styled.img`
    width: 40px;
    height: 40px;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    padding: 1rem;
    position: relative;

    &:hover{
        cursor: pointer;
    }
    

    ::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #FFFFFF;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 250ms ease-in;
    }
    &:hover::after{
        transform: scaleX(1);
    }
`;

const StyledLink2 = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    padding: 1rem;
    position: relative;

    &:hover{
        cursor: pointer;
    }
    

    ::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #FFFFFF;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 250ms ease-in;
    }
    &:hover::after{
        transform: scaleX(1);
    }
`;

const Navigation = forwardRef(({onFormClick, onAboutClick, onServicesClick, onHomeClick}, ref) => {
    return (
        <HeaderContainer>
            <StyledImg src='/logo.png' alt="logo"></StyledImg>
            <p>No +<span>Accidentes</span></p>
            <NavNavigation>
                <StyledLink onClick={onHomeClick}>Inicio</StyledLink>
                <StyledLink onClick={onAboutClick}>Sobre Nosotros</StyledLink> 
                <StyledLink onClick={onServicesClick}>Servicios</StyledLink>
                <StyledLink onClick={onFormClick}>Contacto</StyledLink>
                <StyledLink2 to={'/login'}>Iniciar Sesion</StyledLink2>   
            </NavNavigation>
      </HeaderContainer>
    )

})

export default Navigation;
