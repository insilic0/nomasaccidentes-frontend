import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from '../../context/autenticacion/authContext';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


const SideBar = () => {

    const authContext = useContext(AuthContext);
    const {usuarioAutenticado, usuario } = authContext;

   useEffect(()=>{
         usuarioAutenticado();
   },[]);
   

    return (
        <div className="sidebar-container">
            {usuario.cargo_out === 1 ? (
                // Cargo 1 = Profesional
                <>

                <div className="sidebar-item">
                   <StyledLink to={`/dashboard/home`}>
                       <i className="fas fa-home"></i>
                       <p>Inicio</p>
                   </StyledLink> 
               </div>
               
               <div className="sidebar-item">
                    <StyledLink to={`/dashboard/add-user`}>
                        <i className="fas fa-user-plus"></i>
                        <p>Agregar Cliente</p>
                    </StyledLink> 
                </div>

                <div className="sidebar-item">
                
                    <StyledLink to={`/dashboard/gestion-asesoria`}>
                        <i className="fas fa-briefcase"></i>
                        <p>Gestión Asesorías</p>
                    </StyledLink>   
                </div>

                <div className="sidebar-item">
                    <StyledLink to={`/dashboard/gestion-capacitaciones`}>
                        <i className="fas fa-bullhorn"></i>
                        <p>Gestión Capacitaciones</p>
                    </StyledLink>   
                </div>

                <div className="sidebar-item">
                    <StyledLink to={`/dashboard/add-contract`}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Gestión Visitas</p>
                    </StyledLink>   
                </div>

               </>) : null
            }
            {usuario.cargo_out === 2 ?(
                //Cargo 2 = Administrador
                <>
                    <div className="sidebar-item">
                
                    <StyledLink to={`/dashboard/add-contract`}>
                        <i className="fas fa-file-signature"></i>
                        <p>Gestion Contrato</p>
                    </StyledLink>   
                    </div>

                    <div className="sidebar-item">
                        <StyledLink to={`/dashboard/add-funcionario`}>
                            <i className="fas fa-user-tie"></i>
                            <p>Agregar Funcionario</p>
                        </StyledLink> 
                    </div>

                    <div className="sidebar-item">
                        <StyledLink to={`/dashboard/add-contract`}>
                            <i className="fas fa-search"></i>
                            <p>Búsqueda Empresa</p>
                        </StyledLink>   
                    </div>

                    <div className="sidebar-item">
                        <StyledLink to={`/dashboard/add-contract`}>
                            <i className="fas fa-chart-line"></i>
                            <p>Gestión Reportes</p>
                        </StyledLink>   
            </div>
                </>) : null}
            
        </div>
    )
}
export default SideBar;
