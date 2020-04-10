import styled from 'styled-components'
import {  } from './_consts'

export const WorkflowMainContainer = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0px 0px 0px 0px;
  padding: 15px 15px 15px 15px;

  .Workflow-header {
    display: grid;
    .Workflow-header-details {
      display: flex;
      align-items: baseline;
      h2 {
        margin-right: 15px;
      }
    }
    .Workflow-header-steps {
      display: flex;
      align-items: center;
    }
  }
  
  .Workflow-content {
    background-color: ${props => props.theme.Modules.dashboardWidgetBG};
    box-shadow: ${props => props.theme.Modules.dashboardBoxShadow};
    margin: 0px 0px 15px 0px;
    padding: 15px 15px 15px 15px;
    border-radius: 2px;
    overflow: hidden;
    &:last-of-type {
      margin: 0px 0px 0px 0px;
      position: relative;
    }
    .workflow-form {
      //height: 100%;
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      top: 15px;
      & > form {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
      }
    }
  }
`