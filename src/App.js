import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Landing from './components/content/Landing';
import Dashboard from './components/content/Dashboard';

import RutaPrivada from './components/routes/RutaPrivada';

import AlertaState from './context/validacion/alertaState';
import AuthState from './context/autenticacion/authState';
import ClienteState from './context/cliente/clienteState';
import FuncionarioState from './context/funcionario/FuncionarioState';
import ContratoState from './context/contrato/contratoState';

import tokenAuth from './config/tokenAuth';


const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {

  //Revisar token

  return (

    <ContratoState>
      <FuncionarioState>
        <ClienteState>
          <AuthState>
            <AlertaState>
                <Router>
                  <Switch>
                    <Route exact path ='/' component={Landing}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <RutaPrivada exact path='/dashboard' component={Dashboard}></RutaPrivada>
                  </Switch>
                </Router>
            </AlertaState>
          </AuthState>
        </ClienteState>
      </FuncionarioState>
    </ContratoState>
  );
}

export default App;