import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../layout/TopBar';
import SideBar from '../layout/SideBar';

import clienteAxios from '../../config/axios';

import {Route, Switch, HashRouter as Router} from 'react-router-dom';
import AgregarUsuario from '../layout/Dashboard/AgregarUsuario/AgregarUsuario';
import GestionContrato from '../layout/Dashboard/GestionContrato/GestionContrato';
import Home from '../layout/Dashboard/Home/Home';
import GestionAsesorias from '../layout/Dashboard/GestionAsesorias/GestionAsesorias';
import GestionCapacitaciones from '../layout/Dashboard/GestionCapacitaciones/GestionCapacitaciones';
import AgregarFuncionario from '../layout/Dashboard/AgregarFuncionario/AgregarFuncionario';
import GestionAccidentes from '../layout/Dashboard/GestionAccidentes/GestionAccidentes';

import AuthConext from '../../context/autenticacion/authContext';


const Dashboard = () => {

    const authContext = useContext(AuthConext);
    const {usuario} = authContext;
    // Extraer la información de autenticac

    const [stateComunas, setComunas] = useState({});

    useEffect(()=>{
        consultarComunas();
    }, []);
    
    const consultarComunas = async() =>{
        const respuesta = await clienteAxios.get('/api/comunas');
        setComunas(respuesta.data.comunas);
    }

    return (
            <Router>
                <TopBar />
                    <div className="dashboard-container">
                {usuario ? (<SideBar />) : null}
                
                <Switch>
                    <Route path={'/add-user'} render={(props) => <AgregarUsuario {...props} stateComunas={stateComunas}/>}/>
                    <Route path={'/add-contract'} component={GestionContrato}  />
                    <Route path={'/home'} component={Home} />
                    <Route path={'/gestion-asesoria'} component={GestionAsesorias} />
                    <Route path={'/gestion-capacitaciones'} component={GestionCapacitaciones} />
                    <Route path={'/add-funcionario'} component={AgregarFuncionario} />
                    <Route path={'/gestion-accidentes'} component={GestionAccidentes} />
                </Switch>
                </div>
            </Router>
    )
}

export default Dashboard;
