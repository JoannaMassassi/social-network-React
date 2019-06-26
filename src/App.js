import React from 'react';
import './App.css';
import { Component } from 'react';
import  Wall  from './Components/Wall';
import LogIn from './Components/LogIn';
import './LogIn.css';
import fire from './Firebase/Firebase';
import SignUp from './Components/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  // Auth Change Listener
  componentDidMount = () => {
    this.setState({ loading: true });
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true, loading: false });
      } else {
        this.setState({ loggedIn: false, loading: false });
      }
    });
  };

 

  render() {
    return (
      <Router>
        <div>
                    
                    {!this.state.loading &&
                      this.state.loggedIn && (
                        <LogIn/>
                      )}
               
          
         
          <Route exact path="/" component={LogIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/wall" component={Wall} />
         
          </div>
          </Router>
    );
  }
};

export default App;
