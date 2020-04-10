import styled from 'styled-components'
import {  } from './_consts'
import { flexRowStart } from '../../utilities'

export const WfMenuGroupTitleContainer = styled.div`
  padding: 15px;
  background-color: ${props => props.theme.Modules.menugroupTitleBG};
  border-bottom: ${props => props.theme.Modules.menugroupTitleBorderBottom};
  
  h4 {
    ${flexRowStart}
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-size: 1.2rem;

    svg#icon-ellipsis-v { 
      margin-right: 12px;
      width: 8px;
      fill: ${props => props.theme.Modules.menugroupTitleIcon}; 
    }

    span { color: ${props => props.theme.Modules.menugroupTitleColor}; }
  }
`