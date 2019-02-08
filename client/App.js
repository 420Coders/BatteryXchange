
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Auth from "./src/components/utils/auth";
import Authentication from "./src/components/Authentication";

import PayPalPage from "./src/pages/PayPalPage";
import LoginPage from "./src/pages/LoginPage";
import SignUpPage from "./src/pages/SignUpPage";

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
					<PrivateRoute path="/payment" component={PayPalPage} token={this.state.token} />
					
				</div>
			</BrowserRouter>
		)
	}
}

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
	
export default App;
