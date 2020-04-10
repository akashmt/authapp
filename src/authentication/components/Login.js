import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Auth extends Component {
	render() {
		return (
			<div className="Auth-login">
				<h2>Login</h2>
				<form className="">
					<div className="">
						<label className="" htmlFor="username">Username</label>
						<br/>
						<input className="" id="username" type="text" placeholder="Enter Username"/>
					</div>
					<div className="">
						<label className="" htmlFor="password">Password</label>
						<br/>
						<input className="" id="password" type="password" placeholder="Enter Password"/>
						<br/>
						<small className="">Please choose a password.</small>
					</div>
					<div className="">
						<StyledButton className="" type="button">
							<Link to="/applications">Sign In</Link>
						</StyledButton>
					</div>
				</form>
				<small><Link to="/auth/forgotpassword">Forgot Password?</Link></small>&nbsp;|&nbsp;
				<small><Link to="/auth/register">Not registered?</Link></small>
				<br/>
				<small className="">©2019 JIVASOFT Corp. All rights reserved.</small>
			</div>
		)
	}
}

const StyledButton = styled.button`
	padding-top: 2px;
	background-color: #232323;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	text-decoration: none;
	a {
		padding: 0px 4px 0px 4px;
		color: white;
		text-decoration: none;
		&:hover { color: grey; }
	}
`;