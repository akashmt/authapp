import styled from 'styled-components'
import {  } from './_consts'

export const FormTemplateContainer = styled.form`
  margin: ${props => props.theme.AppForms.FormMargin};
  &:last-of-type { margin: ${props => props.theme.AppForms.FormMarginLastoftype}; }
  padding: ${props => props.theme.AppForms.FormPadding};
  border: ${props => props.theme.AppForms.FormtypograpgyBorderSize} ${props => props.theme.AppForms.FormtypograpgyBorderType} ${props => props.theme.AppForms.FormtypograpgyBorderColor};

  button.cancel-button {
    color: #FFFFFF;
    background-color: #8D1414;
    border: 1px solid #8D1414;
    &:hover {
      color: #FFFFFF;
      background-color: #c53030;
      border: 1px solid #c53030;
    }
  }
  button.finish-button {
    color: #FFFFFF;
    background-color: #146B36;
    border: 1px solid #146B36;
    &:hover {
      color: #FFFFFF;
      background-color: #28e070;
      border: 1px solid #28e070;
    }
  }

  .Steps-top {
    display: flex;
    justify-content: space-between;
    .button-group {
      display: flex;
    }
    button {
      margin: 0px 5px;
    }
  }

  .Steps-bottom {
    display: flex;
    justify-content: space-between;
  }
`