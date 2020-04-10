import styled from 'styled-components'
import { ANCHOR_COLOR, ANCHOR_COLOR_HOVER } from './_consts'
import { flexRowStart } from '../../utilities'

export const HeaderNavContainer = styled.nav`
	${flexRowStart}
	ul {
		${flexRowStart}
		margin-left: 15px;
		list-style: none;
		li {
			a {
				margin: 0px 5px 0px 0px;
				padding: 2px 5px 2px 5px;
				text-transform: uppercase;
				color: ${ANCHOR_COLOR};
				&:hover { color: ${ANCHOR_COLOR_HOVER}; }
			}
		}
	}
`