import React from 'react';
import { Component } from 'react';
import fire from '../Firebase/Firebase';


class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email:"",
            password:""
        }
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container-1">
                 <div className="email-log"  >
                    <h1>REGISTRARSE</h1>
                    <label htmlFor="exampleInputEmail1">Email adress</label>
                    <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
                    id="exampleInputEmail1" placeholder="Enter email" />
                 </div>
                 <div className="password-log"  >
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
                    id="exampleInputPassword1" placeholder="Password" />
                 </div>
               
                 <button  onClick={this.signup} className="btn-2">Registrarse</button>
           
            </div>



        );
    }


}

export default Register;