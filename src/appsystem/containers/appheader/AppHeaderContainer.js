import styled from 'styled-components'
import { FONT_COLOR, BG_COLOR, BORDER_BOTTOM, BOX_SHADOW } from './_consts'

export const AppHeaderContainer = styled.header`
	display: grid;
	grid-template-columns: auto auto 1fr 1fr;
	grid-template-areas: "appadminpanel appheaderbrand appheadernav appusernav";
	section.App-adminpanel 	{ grid-area: appadminpanel; }
	section.App-headerbrand { grid-area: appheaderbrand; }
	nav.App-headernav 			{ grid-area: appheadernav; }
	nav.App-usernav 				{ grid-area: appusernav; }

	margin: 0px 0px 0px 0px;
	padding: 2px 15px 2px 15px;

	z-index: 2;
	color: ${FONT_COLOR};
	background-color: ${BG_COLOR};
	border-bottom: ${BORDER_BOTTOM};
	box-shadow: ${BOX_SHADOW};
`