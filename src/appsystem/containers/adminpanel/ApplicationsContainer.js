import styled from 'styled-components'
import { flexRowCenter } from '../../utilities'


export const ApplicationsContainer = styled.div`
  ${flexRowCenter}
  flex-direction: column;
  flex-wrap: nowrap;
  width: 120px;
  height: 100vh;  
  color: ${props => props.theme.AppNavPanel.textColor};
  box-shadow: ${props => props.theme.AppNavPanel.boxShadowRight};
  background-color: ${props => props.theme.AppNavPanel.backgroundColor};
`