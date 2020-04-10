import React, { Component } from 'react'
import { ModuleContainer } from '../../../appsystem/containers/module'
import ModuleAside from './aside/ModuleAside'
import ModuleMain from './main/ModuleMain'

export default class Module extends Component {
	render() {
		return (
			<ModuleContainer className="Module-area">
				<ModuleAside/>
				<ModuleMain/>
			</ModuleContainer>
		)
	}
}

