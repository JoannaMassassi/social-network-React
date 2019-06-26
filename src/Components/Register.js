import React from "react";
import fire from '../Firebase/Firebase';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Component } from 'react';
import LogIn from './LogIn';





class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        loading: true,
        error: false,
        loggedIn: true
      };
    }
  
    // Form Handle
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    // Auth Change Listener
    componentDidMount = () => {
      fire.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ loading: false, loggedIn: true });
        } else {
          this.setState({ loading: false, loggedIn: false });
        }
      });
    };
  
    signup = e => {
      this.setState({ loading: true, error: false });
      e.preventDefault();
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .then(u => {
          this.setState({ loading: false });
          this.props.history.push("/");
        })
        .catch(error => {
          this.setState({ error: true, loading: false });
        });
    };
  
    render() {
      return (
            <div className="form1">
  
            {!this.state.loggedIn ?
            <div>
            <h2>
                ¡Únete!
            </h2>
            <p>
                Somos la mejor herramienta para encontrar productos veganos 
            </p>
            </div>
            : null }
  
            {!this.state.loggedIn ? (
              <Form>
                
                <input
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Email"
                  name="email"
                  autoComplete="username"
                />
                <input
                  onChange={this.handleChange}
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                  type="password"
                />

                <br>
                </br>
                {this.state.error ? (
                      <p>
                          El correo que ingresaste ya está registrado.
                      </p>
                   
                ) : null}
  
                <div className="ui buttons fluid">
                  <Button onClick={this.signup} className="ui button green">
                    Regístrate 
                  </Button>
                </div>

               
                {!this.state.loading &&
                      !this.state.loggedIn && (
                        <div>
                          
                          Si ya tienes una cuenta <a href="/">Inicia Sesión</a>

                        </div>
                      )}
                 
            
                
              </Form>
            ) : null}
  
            {this.state.loggedIn ? <LogIn /> : null}
  
          </div>
      );
    }
  }
  
  export default Signup;
 