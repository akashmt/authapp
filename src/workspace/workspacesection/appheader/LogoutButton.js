import React, { Component } from 'react'
import { LogoutButtonContainer } from '../../../appsystem/containers/appheader'
import { IconPowerOff } from '../../../appsystem/assets/icons/auth'

export default class LogoutButton extends Component {
	render() {
		return (
			<LogoutButtonContainer className="btn btn-icon" href="/">
				<IconPowerOff/><span>Logout</span>
			</LogoutButtonContainer>
		)
	}
}