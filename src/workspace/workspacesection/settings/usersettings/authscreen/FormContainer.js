import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import SVGCheckmark from './assets/SVGCheckmark'

export default function FormContainer() {
	return (
		<form class="Form-container">
			<fieldset>
				<legend>Login</legend>
				<label htmlFor=""></label>
				<input type="text"/>
			</fieldset>
		</form>
	)
}
