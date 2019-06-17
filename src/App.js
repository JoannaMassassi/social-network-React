import React from 'react';
import './App.css';
import { Component } from 'react';
import fire from './Firebase/Firebase';
import  Register from './Components/Register';
import  Wall  from './Components/Wall';
import LogIn from './Components/LogIn';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      user: {},
    }
  }

  componentDidMount(){
    this.authlistener();
  }
 
  authlistener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
      });
    }
  
  render() {
    return (
     <div>
       {this.state.user ? (<Wall />) : (<LogIn />)}
       
    

     </div>
    );
  }
}

export default App;
