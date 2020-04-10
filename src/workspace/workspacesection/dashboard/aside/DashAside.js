import React, { Component } from 'react'
import { ModuleAsideContainer } from '../../../../appsystem/containers/module'
import MenuGroup from './menugroup/MenuGroup'

export default class DashAside extends Component {
	render() {
		return (
			<ModuleAsideContainer className="Module-aside">
				{/*** Dashboard Items */}
				<MenuGroup/>
			</ModuleAsideContainer>
		)
	}
}