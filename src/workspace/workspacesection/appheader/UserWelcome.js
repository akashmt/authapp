import React, { Component } from 'react'
import { UserWelcomeContainer } from '../../../appsystem/containers/appheader'
import { IconUserCircle } from '../../../appsystem/assets/icons/user'

export default class UserWelcome extends Component {
	render() {
		return (
			<UserWelcomeContainer className="User-welcome">
				<a href="/">
					<IconUserCircle/>
				</a>
				<div className="user-text">
					<small>Welcome..</small>
					<span><a href="/">Dan Ryan</a></span>
				</div>
			</UserWelcomeContainer>
		)
	}
}