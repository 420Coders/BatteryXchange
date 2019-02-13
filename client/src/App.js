import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Auth from "./auth";
import Authentication from "./Authentication";

import PayPalPage from "./pages/PayPalPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ThankYouPage from "./pages/ThankYouPage";

class App extends Component {
	state = {
		token: Auth.getToken()
	}

	componentDidMount() {
		Auth.onAuthChange(this.handleAuthChange);
	}

	handleAuthChange = token => {
		this.setState({
			token
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					
					<header>
						<Authentication token={this.state.token} />
					</header>
					<Route exact path="/" render={() => <LoginPage token={this.state.token} />} />
					<Route exact path="/signup" render={() => <SignUpPage token={this.state.token} />} />
					<Route path="/payment" component={PayPalPage} token={this.state.token} />
					<Route path="/thankyou" component={ThankYouPage} token={this.state.token} />
				</div>
			</BrowserRouter>
		)
	}
}
{/*
const PrivateRoute = ({ component: Component, token, ...rest }) => (
	<Route {...rest} render={props => (
		token ? (
			<Component {...props} token={token} />
		) : (
				<Redirect to={{
					pathname: '/',
					state: { from: props.location }
				}} />
			)
	)} />
);    
			*/}
export default App;
