import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import ForgotPassword from './ForgotPassword';
import Register from './Register';

export default class Auth extends Component {
	render() {
		return (
			<section className="Auth-containers" style={{background:'#f1f1f1', padding:'15px'}}>
				<Switch>
					<Route path="/auth/login"
								 component={Login} exact={true} strict={true} />
					<Route path="/auth/logout"
								 component={Logout} exact={true} strict={true} />
					<Route path="/auth/forgotpassword"
								 component={ForgotPassword} exact={true} strict={true} />
					<Route path="/auth/register"
								 component={Register} exact={true} strict={true} />
				</Switch>
			</section>
		)
	}
}
