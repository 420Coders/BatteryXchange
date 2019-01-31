import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "../components/utils/API";
import Auth from "../components/utils/auth";

class SignUpPage extends Component {
    state = {
        email: "",
        password: "",
        redirect: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.email && this.state.password) {
            API.newUser({
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                if (res.status===200) {
                    this.setState({
                        redirect: true
                    })
                }
            })
            .catch(err => console.log(err));
        }
    }

    handleLogin = () => {
        if (this.state.redirect) {
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
    }

    render() {
        if (this.props.token) {
            return <Redirect to="/payment" />
        }
        return (
            <div>
                <h1>SignUp</h1>
                {this.handleLogin()}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
                    <button> SignUp </button>
                </form>
            </div>
        )
    }
}

export default SignUpPage;