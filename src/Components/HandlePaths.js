import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PageNotFound } from './proof';
import { Register } from './Register';
import { LogIn } from './LogIn';


const Routes = () => (
    <HashRouter>
    <Switch>
    <Route path="/" exact component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/wall" component={PageNotFound} />
    <Route path="/search" component={PageNotFound} />
    <Route component={PageNotFound}/>
    </Switch>
      
    </HashRouter>
  
  );

  export default Routes;