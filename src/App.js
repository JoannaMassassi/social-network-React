import React from 'react';
import './App.css';
import { Component } from 'react';
import  Wall  from './Components/Wall';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import { HashRouter, Route } from 'react-router-dom';
import { AuthProvider } from './Firebase/Auth';
import PrivateRoute from './Components/PrivateRoute';
import './LogIn.css';

class App extends Component {
 
  
  render() {
    return (
       
        <AuthProvider>
        <HashRouter>
          <div> 
            <Route exact path="/" component={LogIn} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/wall" componentIfUserExists={Wall} />
            
            </div> 
        </HashRouter>
        </AuthProvider>
    );
  }
}

export default App;
