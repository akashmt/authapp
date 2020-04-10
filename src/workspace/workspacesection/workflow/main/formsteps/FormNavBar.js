import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormNavBarContainer } from '../../../../../appsystem/containers/workflow'

const FormNavBar = props => {

  const steps = useSelector(state => state.stepReducer.steps)
  const activeStep = useSelector(state => state.stepReducer.activeStep)
  const dispatch = useDispatch()

  // Go To form step
  const goToStep = (stepindex) => {
    let stepInt = parseInt(stepindex, 10);
    dispatch({ type: 'SET_ACTIVE_STEP', _value:stepInt });
  };

  return (
    <FormNavBarContainer className="Step-navigation">
      <nav className="step-navbar">
      <ol className="Menus-workflowstepper">

        {steps.map(({ name, title }, index) => (
          <li key={`${name}_${index}`} className={(activeStep === index) ? `active` : ''}>
            <label key={`${name}_${index}`}>
              <input name="step-options" type="radio" value={index} checked={activeStep === index} onChange={newValue => goToStep(newValue.target.value)} style={{display:'none'}} />
              {title}
            </label>
          </li>
        ))}

      </ol>

      </nav>
    </FormNavBarContainer>
  )
}



export default FormNavBar