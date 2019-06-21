import React, { useCallback } from "react";
import { withRouter } from "react-router";
import fire from '../Firebase/Firebase';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

    const SignUp = ({ history }) => {
        const handleSignUp = useCallback(async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
               await fire
               .auth()
               .createUserWithEmailAndPassword(email.value, password.value);
               history.push("/wall"); 
            } catch (error) {
                alert(error);
            }
    
    }, [history]);

            return (
              <Form onSubmit={handleSignUp} className="form1">
              <h1>Regístrate</h1>
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
        <Form.Label>¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link></Form.Label>
        <Button variant="outline-success" type="submit">
          ¡Vamos!
        </Button>
      </Form>
                // <div>
                //   <h1>Sign up</h1>
                //   <form onSubmit={handleSignUp}>
                //     <label>
                //       Email
                //       <input name="email" type="email" placeholder="Email" />
                //     </label>
                //     <label>
                //       Password
                //       <input name="password" type="password" placeholder="Password" />
                //     </label>
                //     <button type="submit">Sign Up</button>
                //   </form>
                // </div>
              );
            };
            
            export default withRouter(SignUp);
//             <div className="container-1">
//                  <div className="email-log"  >
//                     <h1>REGISTRARSE</h1>
//                     <label htmlFor="exampleInputEmail1">Email adress</label>
//                     <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
//                     id="exampleInputEmail1" placeholder="Enter email" />
//                  </div>
//                  <div className="password-log"  >
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
//                     id="exampleInputPassword1" placeholder="Password" />
//                  </div>
               
//                  <button  onClick={this.signup} className="btn-2">Registrarse</button>
           
//             </div>



//         );
//     }


// }

// export default Register;