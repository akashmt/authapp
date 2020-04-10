import React, { Component } from 'react'
import { AppHeaderContainer } from '../../../appsystem/containers/appheader'
import ToggleAdminNav from './ToggleAdminNav'
import HeaderBrand from './HeaderBrand'
import HeaderNav from './HeaderNav'
import UserNav from './UserNav'

export default class AppHeader extends Component {
	render() {
		return (
			<AppHeaderContainer className="App-header">
				<ToggleAdminNav/>
				<HeaderBrand/>
				<HeaderNav/>
				<UserNav/>
			</AppHeaderContainer>
		)
	}
}