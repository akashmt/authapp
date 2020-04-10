import styled from 'styled-components'

export const WorkspaceSectionContainer = styled.section`
  background: #f9f9f9;
  background-color: ${props => props.theme.AppGlobal.backgroundColor};
  transition: 0.5s;
  width: 100%;
  z-index: 11;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto) 1fr;
  grid-template-areas:
    "appheader"
    "appsheader"
    "modulearea";

  section.App-header 		{ grid-area: appheader; }
  section.Apps-header 	{ grid-area: appsheader; }
  section.Module-area 	{ grid-area: modulearea; }
`