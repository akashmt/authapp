import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSteps } from '../../../data/actions/stepActions';
import { WorkflowContainer } from '../../../appsystem/containers/workflow'
import WorkflowAside from './aside/WorkflowAside'
import WorkflowMain from './main/WorkflowMain'

const Workflow = props => {
	const dispatch = useDispatch()

	useEffect(() =>{
		dispatch(getSteps())
	}, [dispatch])

	useSelector(state => state.stepReducer.steps)

	return (
		<WorkflowContainer className="Workflow-area">
			<WorkflowAside/>
			<WorkflowMain/>
		</WorkflowContainer>
	)
}

export default Workflow