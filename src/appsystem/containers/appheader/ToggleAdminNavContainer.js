import styled from 'styled-components'
import { TRIGGERICON_FILL, TRIGGERICON_FILL_HOVER } from './_consts'
import { flexRowStart } from '../../utilities'

export const ToggleAdminNavContainer = styled.section`
	${flexRowStart}
	padding: 4px 15px 1px 0px;
	a {
		svg {
			&#icon-bars {
				height: 2rem;
				width: 2rem;
				fill: ${TRIGGERICON_FILL}; 
				&:hover { fill: ${TRIGGERICON_FILL_HOVER}; }
			}
		}
	}
`