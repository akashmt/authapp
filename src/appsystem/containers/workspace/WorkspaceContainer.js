import styled from 'styled-components'
import { GLOBAL_TEXT_COLOR, GLOBAL_BG_COLOR, GLOBAL_TEXT_HEADER_COLOR  } from './_consts'

export const WorkspaceContainer = styled.section`

	color: ${GLOBAL_TEXT_COLOR};
  background-color: ${GLOBAL_BG_COLOR};
  
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  &.is-side-open {
    .Admin-panel { margin-left: 0px; }
    .Workspace-section	{ margin-left: 120px; }
  }

  &.is-submodule-open {
    .Admin-panel { margin-left: 0px;  width: 320px; }
    .Settings.active { 
      z-index: 10 !important; 
    }
    .Workspace-section	{ margin-left: 320px; }
  }

  &.is-submodule-selected {
    .Admin-panel { margin-left: 0px;  width: 200px; }
    .Workspace-section	{ margin-left: 200px; width: auto; }
    nav.App-AdminNavigation ul li .Settings { left: 0px; }
  }


	h1, h2, h3, h4, h5, h6 { color: ${GLOBAL_TEXT_HEADER_COLOR}; }
	
	button, .btn {
		color: ${props => props.theme.AppGlobal.buttonTextColor};
		border: 1px solid ${props => props.theme.AppGlobal.buttonBorderColor};
		background-color: ${props => props.theme.AppGlobal.buttonBGColor};
		&:hover,&:focus,&:active  { 
			color: ${props => props.theme.AppGlobal.buttonTextColorHover};
			border: 1px solid ${props => props.theme.AppGlobal.buttonBorderColorHover}; 
			background-color: ${props => props.theme.AppGlobal.buttonBGColorHover};
		}
		&:visited { 
			background-color: ${props => props.theme.AppGlobal.buttonBGColor}; 
			color: ${props => props.theme.AppGlobal.buttonTextColorHover};
		}
	}
`