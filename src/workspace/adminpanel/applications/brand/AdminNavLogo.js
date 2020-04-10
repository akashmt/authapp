import React, { Component } from 'react'
import { AdminNavLogoContainer } from '../../../../appsystem/containers/adminpanel'
import { LogoJivasoft } from '../../../../appsystem/assets/icons/brand'

export default class AdminNavLogo extends Component {
	render() {
		return (
			<AdminNavLogoContainer className="App-AdminNavlogo">
				<a href="/">
					<LogoJivasoft/>
				</a>
			</AdminNavLogoContainer>
		)
	}
}