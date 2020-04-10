import React, { Component } from 'react'
import { WorkflowAsideContainer } from '../../../../appsystem/containers/workflow'
import WorkflowMenuGroup from './menugroup/WorkflowMenuGroup'

export default class WorkflowAside extends Component {
	render() {
		return (
			<WorkflowAsideContainer className="Workflow-aside">
				<WorkflowMenuGroup/>
			</WorkflowAsideContainer>
		)
	}
}