import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Landing from './components/content/Landing';
import Dashboard from './components/content/Dashboard';

import RutaPrivada from './components/routes/RutaPrivada';

import AlertaState from './context/validacion/alertaState';
import AuthState from './context/autenticacion/authState';
import ClienteState from './context/cliente/clienteState';

import tokenAuth from './config/tokenAuth';


const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {

  //Revisar token

  return (
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
   
  );
}

export default App;