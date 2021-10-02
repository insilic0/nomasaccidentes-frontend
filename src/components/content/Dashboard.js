import React from 'react';
import TopBar from '../layout/TopBar';
import SideBar from '../layout/SideBar';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AgregarUsuario from '../layout/Dashboard/AgregarUsuario/AgregarUsuario';
import AgregarContrato from '../layout/Dashboard/AgregarContrato/AgregarContrato';

const Dashboard = () => {

    return (
            <Router>
                <TopBar />
                <SideBar />
                <Switch>
                    <Route path={'/dashboard/add-user'} component={AgregarUsuario} children={AgregarUsuario} />
                    <Route path={'/dashboard/add-contract'} component={AgregarContrato} children={AgregarContrato} />
                </Switch>
            </Router>
    )
}

export default Dashboard;
