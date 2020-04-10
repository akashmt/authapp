import styled from 'styled-components'
import { LOGOUTBUTTON_BORDER_COLOR, LOGOUTBUTTON_BORDER_COLOR_HOVER,
				 LOGOUTBUTTON_BG_COLOR, LOGOUTBUTTON_BG_COLOR_HOVER,
				 LOGOUTBUTTON_ICON_COLOR, LOGOUTBUTTON_ICON_COLOR_HOVER,
         LOGOUTBUTTON_TEXT_COLOR, 
         //LOGOUTBUTTON_TEXT_COLOR_HOVER 
        } from './_consts'
// import { flexRowStart } from '../../utilities'

export const LogoutButtonContainer = styled.a`
	border: ${LOGOUTBUTTON_BORDER_COLOR} !important;
	background-color: ${LOGOUTBUTTON_BG_COLOR} !important;
	&:hover {
		border: ${LOGOUTBUTTON_BORDER_COLOR_HOVER} !important;
		background-color: ${LOGOUTBUTTON_BG_COLOR_HOVER} !important;
	}
	svg#icon-power-off { fill: ${LOGOUTBUTTON_ICON_COLOR} !important; }
	&:hover { 
		svg#icon-power-off { fill: ${LOGOUTBUTTON_ICON_COLOR_HOVER} !important; }
	}
	span { color: ${LOGOUTBUTTON_TEXT_COLOR} !important; }
`