import styled from 'styled-components'
import { USERICON_FILL, USERICON_FILL_HOVER,
				 USERTEXT_COLOR,
				 USERANCHOR_COLOR, USERANCHOR_COLOR_HOVER } from './_consts'
import {flexRowStart } from '../../utilities'

export const UserWelcomeContainer = styled.div`
	${flexRowStart}
	a {
		margin: 0px 15px 0px 0px;
		svg {
			&#icon-user-circle {
				width: 28px;
				fill: ${USERICON_FILL}; 
				&:hover { fill: ${USERICON_FILL_HOVER}; }
			}
		}
	}
	div.user-text {
		small { display: block;color: ${USERTEXT_COLOR}}
		span { 
			display: block;
			a {
				color: ${USERANCHOR_COLOR};
				&:hover { color: ${USERANCHOR_COLOR_HOVER}; }
			}
		}
	}
`