import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PageNotFound } from './proof';
import { Register } from './Register';
import { LogIn } from './LogIn';
import   Wall  from './Wall'

const Routes = () => (
    <HashRouter>
    <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/wall" component={Wall} />
    <Route path="/search" component={PageNotFound} />
    <Route component={PageNotFound}/>
    </Switch>
      
    </HashRouter>
  
  );

  export default Routes;