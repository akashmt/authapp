import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="Auth-register">
			<h2>Register</h2>
			<form className="">
				<label>form elements here</label>
			</form>
			<small><Link to="/auth/login">Login</Link></small>
			<br/>
			<small className="">©2019 JIVASOFT Corp. All rights reserved.</small>
		</div>
	)
}

export default Register;