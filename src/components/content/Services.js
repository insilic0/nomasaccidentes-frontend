import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
    text-align: center;
`;
const ServicesDesc = styled.h1`
    padding: 30px;
`;

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width:768px){
        grid-template-columns: 1fr;
    }
`;

const ListItem = styled.div`
    background-color: gray;
    padding: 20px;
    justify-self: center;
    border-radius: 10px;
    color: white;
    margin-bottom: 30px;
    width: 700px;
    transition: 1s ease;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media(min-width:1500px){
        &:hover{
        background-color: black;
        width : 725px;
        height: 475px;
        box-shadow: 5px 5px gray;
        }
    }

    @media(max-width:1500px){
        width: 400px;
    }
`;

const ItemImg = styled.img`
    width: 300px;
    height: 200px;
`;
const Services = ({servicesRef}) => {
    return (
        <ServicesContainer ref ={servicesRef}>
            <ServicesDesc>Nuestros Servicios</ServicesDesc>
            <ListContainer>
                <ListItem>
                    <h2>Asesorías</h2>
                    <p>Contamos con 10 Asesorías al momento de contratar nuestros servicios</p>
                    <ItemImg src="./assets/services/services-1.jpg"></ItemImg>
                </ListItem>
                
                <ListItem>
                    <h2>Visitas</h2>
                    <p>Nuestros servicios incluyen 2 visitas mensuales para verificar tu checklist personalizado</p>
                    <ItemImg src="./assets/services/visita.png"></ItemImg>
                </ListItem>
                <ListItem>
                    <h2>Capacitaciones</h2>
                    <p>Contamos con 10 Asesorias al momento de contratar nuestros servicios</p>
                    <ItemImg src="./assets/services/capacitaciones.jpg"></ItemImg>
                </ListItem>
                <ListItem>
                    <h2>Centro de Llamados</h2>
                    <p>Puedes contactarnos si tienes alguna duda sobre nuestros servicios</p>
                    <ItemImg src="./assets/services/call-center.png"></ItemImg>
                </ListItem>
            </ListContainer>
        </ServicesContainer>
    )
}

export default Services
