import React from 'react'
import WorkflowStep from './WorkflowStep'
import WorkflowStepTitle from './WorkflowStepTitle'
import WolflowPieChartOne from './WolflowPieChartOne'

import { WorkflowsStatusContainer } from '../../../../appsystem/containers/module'

export default function WorkflowsStatus() {
	return (
		<WorkflowsStatusContainer className="Module-content">
			<h3>Workflows Status</h3>
			<div className="wf-container">
				<section className="">
					<div className="Workflow-status">
						<WorkflowStepTitle/>
						<WorkflowStep/>
					</div>
					<div className="Workflow-status">
						<WorkflowStepTitle/>
						<WorkflowStep/>
					</div>
					<div className="Workflow-status">
						<WorkflowStepTitle/>
						<WorkflowStep/>
					</div>
					<div className="Workflow-status">
						<WorkflowStepTitle/>
						<WorkflowStep/>
					</div>
				</section>
				<section className="wf-right">
					<WolflowPieChartOne/>
				</section>
			</div>
		</WorkflowsStatusContainer>
	)
}
