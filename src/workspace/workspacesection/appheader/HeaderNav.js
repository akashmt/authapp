import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderNavContainer } from '../../../appsystem/containers/appheader'

export default class HeaderNav extends Component {
	render() {
		return (
			<HeaderNavContainer className="App-headernav">
				<ul>
					<li><NavLink exact to="/">Dashboard</NavLink></li>
					<li><NavLink exact to="/docs">Docs</NavLink></li>
					<li><NavLink exact to="/support">Support</NavLink></li>
				</ul>
			</HeaderNavContainer>
		)
	}
}