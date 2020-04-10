import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
	return (
		<div className="Auth-forgotpassword">
			<h2>Forgot Password</h2>
			<form className="">
				<label>form elements here</label>
			</form>
			<small><Link to="/auth/login">Login</Link></small>
			<br/>
			<small className="">©2019 JIVASOFT Corp. All rights reserved.</small>
		</div>
	)
}

export default ForgotPassword;