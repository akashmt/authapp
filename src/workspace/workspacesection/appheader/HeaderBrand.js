import React, { Component } from 'react'
import { HeaderBrandContainer } from '../../../appsystem/containers/appheader'
import { LogoEDSHat_liquid as LogoEDSHat,
				 LogoEDSText_liquid as LogoEDSText,
				 LogoEDSTextBottom_liquid as LogoEDSTextBottom } from '../../../appsystem/assets/icons/brand'

export default class HeaderBrand extends Component {
	render() {
		return (
			<HeaderBrandContainer className="App-headerbrand">
				<figure>
					<LogoEDSHat/>
				</figure>
				<h1>
					<span>Extra Duty Solutions</span>
					<small>A Hart Halsey Company</small>
					<LogoEDSText/><LogoEDSTextBottom/>
				</h1>
			</HeaderBrandContainer>
		)
	}
}