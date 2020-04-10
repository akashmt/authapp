import React, { Component } from 'react'
import { UserNavContainer } from '../../../appsystem/containers/appheader'
import UserWelcome from './UserWelcome'
import ToggleDarkmode from './ToggleDarkmode'
import LogoutButton from './LogoutButton'

export default class UserNav extends Component {
	render() {
		return (
			<UserNavContainer className="App-usernav">
				<ul>
					<li><UserWelcome/></li>
					<li><ToggleDarkmode/></li>
					<li><LogoutButton/></li>
				</ul>
			</UserNavContainer>
		)
	}
}