import React, { Component } from 'react'
import SearchPanel from './searchpanel/SearchPanel'

export default class AgencySwitcher extends Component {
	render() {
		return (
			<div className="Agency-switcher">
				<SearchPanel/>
			</div>
		)
	}
}