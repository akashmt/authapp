import React from 'react'
import { Link } from 'react-router-dom'
import { MenuGroupContainer, MenuGroupTitleContainer, MenuGroupItemsContainer } from '../../../../../appsystem/containers/module'
import { IconEllipsisV } from '../../../../../appsystem/assets/icons/menu'

const Aside = props => {
	return (
		<MenuGroupContainer className="Module-menugroup">
			<MenuGroupTitleContainer className="Module-menugrouptitle">
				<h4><IconEllipsisV/> <span>User Settings</span></h4>
			</MenuGroupTitleContainer>
			<MenuGroupItemsContainer className="Module-menugroupitems">
				<ul className="Menus-workflows">
					<li><Link to="/">Setting1</Link></li>
					<li><Link to="/user-setting2">Setting2</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</MenuGroupItemsContainer>
		</MenuGroupContainer>
	)
}

export default Aside