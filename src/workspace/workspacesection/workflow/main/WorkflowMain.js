import React, { Component } from 'react'
import WorkflowContent from './content/WorkflowContent'
import FormSteps from './formsteps/FormSteps';

import { WorkflowMainContainer } from '../../../../appsystem/containers/workflow'

class WorkflowMain extends Component {
	render() {
		return (
			<WorkflowMainContainer className="Workflow-main">
       	<div className="Workflow-content">
					<WorkflowContent/>
				</div>
				<div className="Workflow-content">
          <FormSteps/>
				</div>
			</WorkflowMainContainer>
		)
	}
}

export default WorkflowMain