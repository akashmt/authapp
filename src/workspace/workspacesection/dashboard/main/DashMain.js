import React, { Component } from 'react'
import { ModuleMainContainer } from '../../../../appsystem/containers/module'
import DashboardHero from '../hero/Hero'
import Analytics from '../blocks/Analytics'
import TwoColumns from '../blocks/TwoColumns'

export default class DashMain extends Component {
	render() {
		return (
			<ModuleMainContainer className="Module-main">
				<DashboardHero/>
				<Analytics/>
				<TwoColumns/>
			</ModuleMainContainer>
		)
	}
}