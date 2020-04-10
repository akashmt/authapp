import React, { Component } from 'react'
import { WorkflowMenuGroupContainer } from '../../../../../appsystem/containers/workflow'
import WfMenuGroupTitle from './title/WfMenuGroupTitle'
import WfStepGroupItems from './items/WfStepGroupItems'

export default class WorkflowMenuGroup extends Component {
	render() {
		return (
			<WorkflowMenuGroupContainer className="Workflow-menugroup">
				<WfMenuGroupTitle/>
				<WfStepGroupItems/>
			</WorkflowMenuGroupContainer>
		)
	}
}