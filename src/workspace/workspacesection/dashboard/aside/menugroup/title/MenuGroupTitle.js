import React, { Component } from 'react'
import { MenuGroupTitleContainer } from '../../../../../../appsystem/containers/module'
import { IconEllipsisV } from '../../../../../../appsystem/assets/icons/menu'

export default class MenuGroupTitle extends Component {
	render() {
		return (
			<MenuGroupTitleContainer className="Module-menugrouptitle">
				<h4><IconEllipsisV/><span>Module Name</span></h4>
			</MenuGroupTitleContainer>
		)
	}
}