import styled from 'styled-components'
import {  } from './_consts'

export const WfStepGroupItemsContainer = styled.nav`
  padding: 15px 0px 15px 0px;
  background-color: ${props => props.theme.Modules.menugroupNavigationBG};

  h3 {
    color: ${props => props.theme.Modules.menugroupAgentTitle}; 
    margin: 0px 0px 15px 0px;
    padding: 0px 0px 0px 15px;
  }
  

  ol.Menus-workflowstepper {
    counter-reset: list;
    margin: 0px 10px 0px 10px;
    padding: 0px 0px 0px 0px;
    list-style: none;
    & > li {
      counter-increment: list;
      margin: 0px 0px 0px 0px;
      padding: 10px 0 10px 0px;
      display: flex;
      flex-wrap: wrap;
      label {
        color: ${props => props.theme.Modules.menugroupTitleColor};
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        width: 80%;
        align-items: center;
        font-weight: bold; 
        svg#icon-angle-right, svg#icon-angle-down {
          fill: ${props => props.theme.Modules.menugroupTitleColor};
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
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
      .step-content {
        color: ${props => props.theme.Modules.menugroupTitleColor};
        height: 0;
        overflow-y: hidden;
        ul {
          margin: 10px 0px 0px 15px;
          padding: 0px 0px 0px 0px;
          list-style: none;
          li {
            padding: 5px 0px;
            margin: 0px;
            list-style: circle;
          }
        }
      }
      &.active {
        &::before {
          background-color: #0081cc;
        }
        .step-content {
          padding: 15px;
          height: 170px;
          transition-property: all;
          transition-duration: .5s;
          transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        }
      }
    }
  }
`