import React, { Component } from 'react'
import { ModuleAsideContainer } from '../../../../appsystem/containers/module'
import MenuGroup from './menugroup/MenuGroup'

export default class ModuleAside extends Component {
	render() {
		return (
			<ModuleAsideContainer className="Module-aside">
				<MenuGroup/>
			</ModuleAsideContainer>
		)
	}
}

