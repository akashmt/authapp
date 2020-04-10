import styled from 'styled-components'


export const AdminNavLogoContainer = styled.figure`
  display: grid;
  place-items: center center;
  margin: 15px 15px 15px 15px;
  padding: 0px 0px 0px 0px;
  font-weight: bold;
  background-color: ${props => props.theme.AppNavPanel.appNavLogoBGColor};
  a { 
    color: ${props => props.theme.AppGlobal.anchorColor};
    svg#logo-jivasoft { 
      width: 70px; 
      height: 40px; 
      fill: ${props => props.theme.AppNavPanel.appNavLogoFill};
    }
  }
  &:hover {
    cursor: pointer; 
    background-color: ${props => props.theme.AppNavPanel.backgroundColor};
    box-shadow: ${props => props.theme.AppNavPanel.boxShadowHover};
    a { 
      color: ${props => props.theme.AppGlobal.anchorColorHover};
    }
    svg#logo-jivasoft { }
  }
`