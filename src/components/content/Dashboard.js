import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../layout/TopBar';
import SideBar from '../layout/SideBar';

import clienteAxios from '../../config/axios';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AgregarUsuario from '../layout/Dashboard/AgregarUsuario/AgregarUsuario';
import AgregarContrato from '../layout/Dashboard/GestionEmpresa/GestionEmpresa';
import Home from '../layout/Dashboard/Home/Home';
import GestionAsesorias from '../layout/Dashboard/GestionAsesorias/GestionAsesorias';
import GestionCapacitaciones from '../layout/Dashboard/GestionCapacitaciones/GestionCapacitaciones';

import AuthConext from '../../context/autenticacion/authContext';


const Dashboard = () => {

    const authContext = useContext(AuthConext);
    const {usuario} = authContext;
    // Extraer la información de autenticaci

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
                    <Route path={'/dashboard/add-user'} render={(props) => <AgregarUsuario {...props} stateComunas={stateComunas}/>}/>
                    <Route path={'/dashboard/add-contract'} component={AgregarContrato}  />
                    <Route path={'/dashboard/home'} component={Home} />
                    <Route path={'/dashboard/gestion-asesoria'} component={GestionAsesorias} />
                    <Route path={'/dashboard/gestion-capacitaciones'} component={GestionCapacitaciones} />
                </Switch>
                </div>
            </Router>
    )
}

export default Dashboard;
