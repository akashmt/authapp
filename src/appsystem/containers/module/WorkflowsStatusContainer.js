import styled from 'styled-components'
import {  } from './_consts'

export const WorkflowsStatusContainer = styled.div`
  .Workflow-status {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    margin-right: 15px;
  }

  .wf-container {
    display: flex;
    .wf-right {
      padding: 15px;
      width: 100%;
      border: 1px solid transparent;
    }
  }
`