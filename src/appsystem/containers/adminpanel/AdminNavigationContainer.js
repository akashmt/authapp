import styled from 'styled-components'


export const AdminNavigationContainer = styled.nav`
  color: ${props => props.theme.AppNavPanel.textColor};
  box-shadow: ${props => props.theme.AppNavPanel.boxShadowRight};
  background-color: ${props => props.theme.AppNavPanel.backgroundColor};
	ul {
    &.module-list {
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
		li {
			a {
        display: grid;
        grid-template-columns: 90px;
        grid-template-rows: 90px;
        place-items: center center;
        margin-bottom: 10px;
        height: 90px;
        font-size: .6rem;
        font-weight: bold;
        transition: all .3s;
        color: ${props => props.theme.AppNavPanel.anchorColor};
        background-color: ${props => props.theme.AppNavPanel.listItemBG};
        svg {
          margin: -10px 0px 0px 0px;
          padding: 0px 0px 0px 0px;
          transition: all .3s;
        }
        svg#logo-extraduty-stacked { 
          width: 50px !important; 
          margin: -16px 0px 0px 0px;
          fill: ${props => props.theme.AppNavPanel.logoExtraDutyFill}; 
        }
        svg#logo-onduty { 
          width: 50px !important;
          fill: ${props => props.theme.AppNavPanel.logoOnDutyFill}; 
        }
        span { margin-top: -60px; text-align: center; }
				&:hover { 
					color:  ${props => props.theme.AppNavPanel.anchorColorHover};
					background-color: ${props => props.theme.AppNavPanel.listItemBGHover};
          box-shadow: ${props => props.theme.AppNavPanel.boxShadowHover};
          a { 
            height: 90px; 
          }
          svg#logo-extraduty-stacked { 
            fill: ${props => props.theme.AppNavPanel.logoExtraDutyFillHover};
            width: 55px !important;
          }
          svg#logo-onduty { 
            width: 55px !important;
            fill: ${props => props.theme.AppNavPanel.logoOnDutyFillHover};
          }
				}
			}
		}
	}
`