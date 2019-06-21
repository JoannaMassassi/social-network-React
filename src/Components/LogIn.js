import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Firebase/Auth";
import fire from '../Firebase/Firebase';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'


const Login = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/wall");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
      console.log(currentUser);
      
  
    return (
  
      <Form onSubmit={handleLogin} className="form1">
        <h1>Inicia Sesión</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control name="email" type="email" placeholder="Ingresa tu email" />
    <Form.Text className="text-muted">
      Nunca compartiremos tu email con nadie.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control name="password" type="password" placeholder="Coloca tu contraseña " />
  </Form.Group>
  <Form.Label>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></Form.Label>
  <Button variant="outline-success" type="submit">
    ¡Vamos!
  </Button>
</Form>
      // <div>
      //   <h1>Log in</h1>
      //   <form onSubmit={handleLogin}>
      //     <label>
      //       Email
      //       <input name="email" type="email" placeholder="Email" />
      //     </label>
      //     <label>
      //       Password
      //       <input name="password" type="password" placeholder="Password" />
      //     </label>
      //     <Button variant="outline-success" type="submit">Vamos!</Button>

      //   </form>
      // </div>
    );
  };
  
  export default withRouter(Login);

//  class LogIn extends Component {
//     constructor(props) {
//         super(props);
//         this.login = this.login.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             email:"",
//             password:""
//         }
//     }

//     login(e) {
//         e.preventDefault();
//         fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//          }).catch((error) => {
//              console.log(error);
//          });
//     }

    

//     handleChange(e) {
//         this.setState({ [e.target.name]: e.target.value});
//     }

//     render() {
//         return (
//             <div className="container-1">
//                  <div className="email-log"  >
//                     <h1>INICIA SESIÓN</h1>
//                     <label htmlFor="exampleInputEmail1">Email adress</label>
//                     <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
//                     id="exampleInputEmail1" placeholder="Enter email" />
//                  </div>
//                  <div className="password-log"  >
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
//                     id="exampleInputPassword1" placeholder="Password" />
//                  </div>
//                  <button type="submit" onClick={this.login} className="btn">Iniciar Sesión</button>           
//             </div>



//         );
//     }


// }

// export default LogIn;