import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PageNotFound } from './proof';


const Routes = () => (
    <HashRouter>
    <Switch>
    <Route path="/" component={PageNotFound} exact={true}/>
    <Route path="/logIn" component={PageNotFound}/>
    <Route path="/register" component={PageNotFound} />
    <Route path="/wall" component={PageNotFound} />
    <Route path="/search" component={PageNotFound} />
    <Route component={PageNotFound}/>
    </Switch>
      
    </HashRouter>
  
  );

  export default Routes;