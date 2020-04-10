import React from 'react'
import { useSelector } from 'react-redux'
import FormTemplate from './FormTemplate';

const FormSteps = props => {
    const steps = useSelector(state => state.stepReducer.steps)
    const activeStep = useSelector(state => state.stepReducer.activeStep)

    return (
      <React.Fragment>
        {steps.map((step, index) => (
          <FormTemplate
            key={`Step_${index}`}
            step={step}
            isShown={activeStep === index}
            index={index}
          />
        ))}
      </React.Fragment>
    )
}
export default FormSteps;
