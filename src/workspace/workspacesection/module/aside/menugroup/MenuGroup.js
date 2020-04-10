import React, { Component } from 'react'
import { MenuGroupContainer } from '../../../../../appsystem/containers/module'
import MenuGroupTitle from './title/MenuGroupTitle'
import MenuGroupItems from './items/MenuGroupItems'

export default class MenuGroup extends Component {
	render() {
		return (
			<MenuGroupContainer className="Module-menugroup">
				<MenuGroupTitle/>
				<MenuGroupItems/>
			</MenuGroupContainer>
		)
	}
}