import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Landing from './components/content/Landing';
import Dashboard from './components/content/Dashboard';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path ={'/'} component={Landing}></Route>
        <Route exact path={'/login'} component={Login}></Route>
        <Route exact path={'/dashboard'} component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;