import styled from 'styled-components'
import {  } from './_consts'

export const ModuleContainer = styled.section`

  background-color: ${props => props.theme.Modules.backgroundColor};
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "moduleaside moduleheader"
    "moduleaside modulemain";
  
  aside.Module-aside 		{ grid-area: moduleaside; }
  header.Module-header 	{ grid-area: moduleheader; }
  main.Module-main 			{ grid-area: modulemain; }
	
`