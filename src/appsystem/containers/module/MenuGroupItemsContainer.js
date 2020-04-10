import styled from 'styled-components'
import {  } from './_consts'

export const MenuGroupItemsContainer = styled.nav`
  padding: 15px 0px 15px 0px;
  background-color: ${props => props.theme.Modules.menugroupNavigationBG};

  h3 {
    margin: 0px 0px 15px 0px;
    padding: 0px 0px 0px 15px;
  }

  ul.Menus-workflows {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    list-style: none;
    li {
      margin: 0px 0px 0px 0px;
      padding: 10px 0px 10px 0px;
      font-weight: bold;
      a {
        margin: 0px 0px 0px 0px;
        padding: 10px 10px 10px 10px;
        font-weight: normal;
        display: flex;
        &:hover { }
      }
      span {
        cursor: pointer
        color: ${props => props.theme.Modules.menuWorkflowItemTitle};
        svg#icon-folder, svg#icon-folder-open  {
          margin: 0px 14px 0px 17px;
          width: 14px;
          height: 14px;
        }
        svg#icon-folder { fill: ${props => props.theme.Modules.menuWorkflowItemIconFolder}; }
        svg#icon-folder-open { fill: ${props => props.theme.Modules.menuWorkflowItemIconFolderOpen}; }
        
      }
      &.close {
        span { color: ${props => props.theme.Modules.menuWorkflowItemIconFolder}; }
      }
      ul.tab-items {
        margin: 10px 0px 0px 0px;
        padding: 0px 0px 0px 8px;
        list-style: none;
        transition: all 0.2s;
        &.hide {
          display: none;
        }
        li {
          padding: 0px 0px 0px 0px;
          a {
            svg#icon-angle-right { 
              fill: ${props => props.theme.Modules.menuWorkflowSubItemIcon}; 
              margin: 0px 14px 0px 0px; 
              width: 14px; 
              height: 14px; 
            }
            span {
              font-weight: bold;
              color: ${props => props.theme.Modules.menuWorkflowSubItemLink};
              &:hover { color: ${props => props.theme.Modules.menuWorkflowSubItemLinkHover}; }
            }
          }
        }
      }
    }
  }
`