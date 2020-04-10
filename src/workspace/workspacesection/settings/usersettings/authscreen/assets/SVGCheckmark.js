import React from 'react'
import styled from 'styled-components'

export default function IconCompass() {
	return (
		<StyledSVG id="icon-checkmark-animated" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
		<path d="M31.8,3.6c-0.2-0.5-0.4-0.9-0.9-1.2C30.4,2,29.7,1.8,29,1.9c-0.6,0.1-1.2,0.4-1.6,1l-8.5,11.2l0,0l-7.2,9.5l-7.1-9.4 c-0.5-0.7-1.3-1-2.1-1c-0.5,0-1,0.2-1.4,0.5c-0.5,0.4-0.9,1-1,1.7s0.1,1.2,0.5,1.8l9.1,12.1l0,0c0.1,0.2,0.3,0.3,0.4,0.4 c0.4,0.3,0.9,0.5,1.4,0.5c0.8,0,1.6-0.3,2.1-1L22.1,18l0,0l9.1-12.1C32,5.2,32.1,4.4,31.8,3.6z"></path>
	</StyledSVG>
	)
}

const StyledSVG = styled.svg`
	fill: RED;
	width: 33px;
	height: 33px;
`