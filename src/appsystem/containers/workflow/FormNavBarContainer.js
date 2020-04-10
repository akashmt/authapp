import styled from 'styled-components'
import {  } from './_consts'

export const FormNavBarContainer = styled.section`
.step-navbar {
  ol.Menus-workflowstepper {
    display: flex;
    counter-reset: list;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    list-style: none;
    li {
      color: ${props => props.theme.Modules.menugroupTitleColor};
      counter-increment: list;
      margin: 0px 0px 0px 0px;
      padding: 4px 10px 4px 10px;
      border-radius: 3px;
      label {
        cursor: pointer;
      }
      &:before {
        color: WHITE;
        background-color: #a4a4a4;

        content: counter(list);
        display: inline-block;
        margin: 0px 15px 0px 0px;
        padding: 0px 0px 0px 0px;
        width: 2.2em;
        height: 2.2em;
        text-align: center;
        font-size: 15px;
        line-height: 2.3em;
        border-radius: 50%;
      }
      &.active {
        color: WHITE ;
        background-color: #012b59;
        &::before {
          background-color: #0081cc;
        }
      }
    }
  }
}
`