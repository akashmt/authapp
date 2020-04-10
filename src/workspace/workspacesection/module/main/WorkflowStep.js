import React from 'react'

import { WorkflowStepContainer } from '../../../../appsystem/containers/module'

export default function WorkflowStep() {
	return (
		<WorkflowStepContainer>
			<ul className="timeline" id="timeline">
				<li className="li complete">
					<div className="status">
						<h6>Shift Created</h6>
					</div>
				</li>
				<li className="li complete">
					<div className="status">
						<h6>Email Sent</h6>
					</div>
				</li>
				<li className="li complete">
					<div className="status">
						<h6>SIC Approval </h6>
					</div>
				</li>
				<li className="li">
					<div className="status">
						<h6>Workflow Completed</h6>
					</div>
				</li>
			</ul>
		</WorkflowStepContainer>
	)
}
