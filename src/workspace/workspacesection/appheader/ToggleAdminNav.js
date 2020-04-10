import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToggleAdminNavContainer } from '../../../appsystem/containers/appheader'
import { IconBars } from '../../../appsystem/assets/icons/toggle'

export default class ToggleAdminNav extends Component {
	handleClick(event) {
		event.preventDefault()
		const wrapper = document.getElementById('workspace-screen');
		wrapper.classList.toggle('is-side-open');
		wrapper.classList.remove('is-submodule-open');
		wrapper.classList.remove('is-submodule-selected');
	}

	render() {
		return (
			<ToggleAdminNavContainer className="App-triggeradminpanel">
				<Link to="/" onClick={this.handleClick}>
					<IconBars/>
				</Link>
			</ToggleAdminNavContainer>
		)
	}
}