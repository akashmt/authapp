import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { WfStepGroupItemsContainer } from '../../../../../../appsystem/containers/workflow'
import { IconAngleRight, IconAngleDown } from '../../../../../../appsystem/assets/icons/direction'

const WfStepGroupItems = props => {
	const steps = useSelector(state => state.stepReducer.steps)
	const activeStep = useSelector(state => state.stepReducer.activeStep)
	const dispatch = useDispatch()

	// Go To form step
	const goToStep = (stepindex) => {
		let stepInt = parseInt(stepindex, 10)
		dispatch({ type: 'SET_ACTIVE_STEP', _value:stepInt })
	}

	return (
		<WfStepGroupItemsContainer className="Workflow-menugroupitems">
			<ol className="Menus-workflowstepper">

				{steps.map(({ name, title }, index) => (
					<li key={`${name}_${index}`} className={(activeStep === index) ? `active` : ''}>
						<label key={`${name}_${index}`}>
							<input
								name="step-options" 
								type="radio" 
								value={index} 
								checked={activeStep === index}
								onChange={newValue => goToStep(newValue.target.value)} 
								style={{display:'none'}} />
							{title}
							{(activeStep === index) ? <IconAngleDown/> : <IconAngleRight/>}
						</label>
						<div className='step-content'>
							<ul>
								<li>ipsum dolor sit amet consectetur</li>
								<li>ipsum dolor sit amet consectetur</li>
								<li>ipsum dolor sit amet consectetur</li>
							</ul> 
						</div>
					</li>
				))}

			</ol>
		</WfStepGroupItemsContainer>
	)
}


export default WfStepGroupItems