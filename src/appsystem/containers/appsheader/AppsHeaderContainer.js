import styled from 'styled-components'
import { FONT_COLOR, BG_COLOR, BORDER_BOTTOM } from './_consts'

//import { PRIMARY_COLOR } from '../../_consts'

export const AppsHeaderContainer = styled.header`
	display: grid;
	/* grid-template-columns: 70px 200px 1fr; */
	grid-template-columns: auto 200px 1fr;
	grid-template-areas: "brandsection modulesection agencysection";
	section.Brand-section  { grid-area: brandsection; }
	section.Module-section { grid-area: modulesection; }
	section.Agency-section { grid-area: agencysection; }

	margin: 0px 0px 0px 0px;
	padding: 5px 15px 5px 15px;

	color: ${FONT_COLOR};
	background-color: ${BG_COLOR};
	border-bottom: ${BORDER_BOTTOM};
`