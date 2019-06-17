import React from 'react';
import { Component } from 'react';
// import Elements from './ScreenElements';
import fire from '../Firebase/Firebase';


 class LogIn extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            password:""
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
         }).catch((error) => {
             console.log(error);
         });
    }

    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container-1">
                 <div className="email-log"  >
                    <h1>INICIA SESIÓN</h1>
                    <label htmlFor="exampleInputEmail1">Email adress</label>
                    <input value ={this.state.email} onChange={this.handleChange} type="email" name="email"
                    id="exampleInputEmail1" placeholder="Enter email" />
                 </div>
                 <div className="password-log"  >
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value ={this.state.password} onChange={this.handleChange} type="password" name="password"
                    id="exampleInputPassword1" placeholder="Password" />
                 </div>
                 <button type="submit" onClick={this.login} className="btn">Iniciar Sesión</button>           
            </div>



        );
    }


}

export default LogIn;