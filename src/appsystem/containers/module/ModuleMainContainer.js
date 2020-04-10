import styled from 'styled-components'
import {  } from './_consts'

export const ModuleMainContainer = styled.main`
  margin: 0px 0px 0px 0px;
  padding: 15px 15px 15px 15px;
  
  .Module-content {
    background-color: ${props => props.theme.Modules.dashboardWidgetBG};
    box-shadow: ${props => props.theme.Modules.dashboardBoxShadow};
    margin: 0px 0px 30px 0px;
    padding: 15px 15px 15px 15px;
    border-radius: 2px;
    &:last-of-type {
      margin: 0px 0px 0px 0px;
    }
    h3 { }
    p { }
  }
  .Module-content-twocolumn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "moduleleft moduleright";
    grid-gap: 30px;
    div.Module-left 	{ grid-area: moduleleft; }
    div.Module-right  { grid-area: moduleright; }
  }
`