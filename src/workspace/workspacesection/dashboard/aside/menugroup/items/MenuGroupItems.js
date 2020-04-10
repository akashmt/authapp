import React, { Component } from 'react'
import { MenuGroupItemsContainer } from '../../../../../../appsystem/containers/module'
import { IconFolder } from '../../../../../../appsystem/assets/icons/menu'

export default class MenuGroupItems extends Component {
	render() {
		return (
			<MenuGroupItemsContainer className="Module-menugroupitems">
				<ul className="Menus-workflows">
					<li><a href="/"><IconFolder/><span>Menugroup1</span></a></li>
					<li><a href="/"><IconFolder/><span>Menugroup2</span></a></li>
					<li><a href="/"><IconFolder/><span>Menugroup3</span></a></li>
				</ul>
			</MenuGroupItemsContainer>
		)
	}
}