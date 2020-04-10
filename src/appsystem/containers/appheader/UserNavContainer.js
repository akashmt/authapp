import styled from 'styled-components'
import { flexRowEnd, flexRowStart } from '../../utilities'

export const UserNavContainer = styled.nav`
	${flexRowEnd}
	ul {
		${flexRowStart}
		margin: .6rem 0rem .6rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		list-style: none;
		li {
			margin-right: 15px;
			&:last-of-type { margin-right: 0px; }
		}
	}
`