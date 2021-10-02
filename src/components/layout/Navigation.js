import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledLink = styled(Link)`
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

const Navigation = () => {
    return (
        <HeaderContainer>
            <StyledImg src='../../assets/logo.png' alt="logo"></StyledImg>
            <p>No +<span>Accidentes</span></p>
            <NavNavigation>
                <StyledLink>Inicio</StyledLink>
                <StyledLink>Sobre Nosotros</StyledLink> 
                <StyledLink>Servicios</StyledLink>
                <StyledLink>Contacto</StyledLink>
                <StyledLink to={'/login'}>Iniciar Sesion</StyledLink>   
            </NavNavigation>
      </HeaderContainer>
    )
}

export default Navigation;
