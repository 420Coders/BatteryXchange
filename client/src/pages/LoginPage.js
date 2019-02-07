import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./LoginPage.css";
import Auth from "../components/utils/auth";
import Xlogo from '../components/images/Xlogo.webp';

class LoginPage extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                //server returning "JWT ...", so we need to split off the token and then create it 
                // and then run it through login function in Auth
                const token = response.token.split(' ')[1];
                Auth.login(token);
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        if (this.props.token) {
            return <Redirect to="/payment" />
        }
        return (
            <div className="loginDiv">

            <div className= "Xlogo-div">
                <img className= "Xlogo" src={Xlogo} alt="logo" />
            </div>

                <div className="loginSec">
                <h1 id="logotitle" >BATTERYXCHANGE</h1>
            
                <form className="logform" onSubmit={this.handleSubmit}>
                    <input id="inputBox" type="text" name="email" placeholder="Email" onChange={this.handleInputChange} />
                    <br/>
                    <br/>
                    <input id="inputBox" type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
                    <br/>
                    <br/>
                    <button class="btn btn-success">Login</button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button class="btn btn-warning">
                    <Link to="/signup">Sign Up Here</Link>
                </button>
                </div>
            </div>

        )
    }
}

export default LoginPage;