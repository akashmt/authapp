import styled from 'styled-components'
import { flexRowCenter } from '../../utilities'


export const SettingsContainer = styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 200px;
  top: 0px;
  left: 120px;
  background: #00162C;
  box-shadow: inset -5px 0px 8px 0px rgba( 17, 17, 17, .09);
  transition: 0.5s;
  .SubApps-nav { 
    padding: 15px;
    h3 { color: ${props => props.theme.AppNavPanel.anchorColor} }
    ul.SubApps-navigation {
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      list-style: none;
      li {
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        a {
          padding: 0px 15px 0px 15px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start; 
          flex-wrap: nowrap;
          align-items: center; 
          align-content: center; 
          height: 40px;
          svg {
            margin: 0rem 0rem 0rem 0rem;
            height: 20px;
            width: 20px; 
            fill: #0081cc; 
          }
          div {
            margin: 0rem 0rem 0rem 0rem;
            padding-left: 15px;
            display: inline-block;
            font-size: .8rem;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`