import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import Auth from "../components/utils/auth";

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
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="password" onChange={this.handleInputChange} />
                    <button>Login</button>
                </form>
                <button>
                    <Link to="/signup">Sign Up Here</Link>
                </button>
            </div>

        )
    }
}

export default LoginPage;