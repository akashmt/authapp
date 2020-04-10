import styled from 'styled-components'
import { MODULETEXT_COLOR, MODULEBORDER_COLOR, MODULEBG_COLOR,
				 MODULEICON_COLOR, MODULETITLE_COLOR } from './_consts'
import { flexRowCenter } from '../../utilities'

export const ModuleNameContainer = styled.div`
	${flexRowCenter}
	width: 100%;
	height: 100%;
	color: ${MODULETEXT_COLOR};
	border: ${MODULEBORDER_COLOR};
	border-radius: 2px;
	background-color: ${MODULEBG_COLOR};
	svg {
		fill: ${MODULEICON_COLOR};
		&#icon-user { 
			margin-right: 5px;
			width: 20px;
			height: 20px;
		}
	}
	h3 { 
    margin-bottom: 0px;
		font-size: 1rem;
		font-weight: 100;
		text-transform: uppercase;
		color: ${MODULETITLE_COLOR} !important; 
	}
`