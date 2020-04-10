import styled from 'styled-components'
import {  } from './_consts'

export const MenuGroupContainer = styled.section`
  border-radius: 2px;
  background-color: ${props => props.theme.Modules.menugroupBGColor};
  border-bottom: ${props => props.theme.Modules.menugroupBorderBottom};
  box-shadow: ${props => props.theme.Modules.menugroupBoxShadow};
`