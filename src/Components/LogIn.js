import React, { Component } from "react";
import fire from '../Firebase/Firebase';
import "../App.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




  class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        loading: true,
        error: false,
        loggedIn: true,
        remember: false
      };
    }
  
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
  
    login = e => {
      this.setState({ loading: true, error: false });
      e.preventDefault();
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {
          this.setState({ loading: false });
          this.props.history.push("/wall");
        })
        .catch(error => {
          this.setState({ error: true, loading: false });
        });
    };
    
    // Form Handle
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div className="boxLog">
        
            {!this.state.loggedIn ? (
              <Form className="form1">
                  <h1 as="h2">
               Inicia Sesión
              </h1 >
                <br />
                {this.state.error ? (
                  <p>
                 Tus datos no están correctos.
              </p>
                ) : null}
                <br />
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
                <div className="ui">
                  <Button onClick={this.login} className="ui-button ">
                    Log in
                  </Button>
                </div>
                ¿Nuevx por aquí? <a href="/register">Crea una cuenta</a>
            
              </Form>
            ) : null}

        
        </div>
      );
    }
  }
  
  export default Login;