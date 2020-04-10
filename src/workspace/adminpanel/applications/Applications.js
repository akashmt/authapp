import React, { Component } from 'react'
import { ApplicationsContainer } from '../../../appsystem/containers/adminpanel'
import AdminNavLogo from './brand/AdminNavLogo'
import AdminNavigation from './adminnav/AdminNavigation'

export default class Applications extends Component {
	render() {
		return (
			<ApplicationsContainer className="Applications">
				<AdminNavigation/>
				<AdminNavLogo/>
			</ApplicationsContainer>
		)
	}
}
