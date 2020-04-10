import React, { Component } from 'react'
import Applications from './applications/Applications'
import { AdminPanelContainer } from '../../appsystem/containers/adminpanel'

export default class AdminPanel extends Component {
	render() {
		return (
			<AdminPanelContainer className="Admin-panel">
				<Applications/>
			</AdminPanelContainer>
		)
	}
}
