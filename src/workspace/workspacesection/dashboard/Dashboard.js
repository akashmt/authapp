import React, { Component } from 'react'
import DashAside from './aside/DashAside'
import DashMain from './main/DashMain'
import { ModuleContainer } from '../../../appsystem/containers/module'

export default class Dashboard extends Component {
	render() {
		return (
			<ModuleContainer className="Module-area">
				{/* Dashboard Aside */}
				<DashAside/>
				{/* Dashboard Main */}
				<DashMain/>
			</ModuleContainer>
		)
	}
}