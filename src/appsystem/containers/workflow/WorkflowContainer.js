import styled from 'styled-components'
import {  } from './_consts'

export const WorkflowContainer = styled.section`

  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "workflowheader workflowaside"
    "workflowmain workflowaside";

  aside.Workflow-aside 		{ grid-area: workflowaside; }
  header.Workflow-header 	{ grid-area: workflowheader; }
  main.Workflow-main 			{ grid-area: workflowmain; }
	
`