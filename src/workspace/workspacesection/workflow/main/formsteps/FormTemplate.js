import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'

import FormGenerator from './FormGenerator'

import { FormTemplateContainer } from '../../../../../appsystem/containers/workflow'

const FormTemplate = props => {

   const steps = useSelector(state => state.stepReducer.steps)
   const [local, setLocal] = useState(0); 
   const activeStep = useSelector(state => state.stepReducer.activeStep)
   const dispatch = useDispatch()

   useEffect(() => {
    setLocal(activeStep)
   },[activeStep]);

   // Proceed to next step
   const nextStep = () => {
     dispatch({ type: 'SET_ACTIVE_STEP', _value:activeStep + 1 });
   };

   // Go back to prev step
   const prevStep = () => {
     dispatch({ type: 'SET_ACTIVE_STEP', _value:activeStep - 1 });
   };

   // Reset workflow value to empty on cancel
   const resetWorkflow = () => {
     dispatch({ type: 'RESET_WORKFLOW_VAL', _value:'' });
     dispatch({ type: 'SET_ACTIVE_STEP', _value:0 });
   }

   const transitions = useTransition(activeStep, null, (local > activeStep ? {
      from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    } :
    {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    }
  ))
  
    const { handleSubmit, isShown, index, step } = props
  
    if (!isShown) {
      return <div />
    }

    return (
      <React.Fragment>
          {transitions.map(({ item, props, key }) => {
            return(  
              <animated.div className="workflow-form" key={key} style={props}> 

                <FormTemplateContainer onSubmit={handleSubmit}>
                    <div className="Steps-top">

                      <div className="steps-title">
                        <h3 key={step.name}>{step.title}</h3>
                      </div>

                      <div className="button-group">

                        <div className="cancel-btn"> 
                          <button className="cancel-button" type="button" onClick={resetWorkflow}>Cancel </button>
                        </div>
                        {(index > 0) ?
                          <div className="prev-btn"> 
                            <button className="prev-button" type="button" onClick={prevStep}> Prev </button>
                          </div>
                        : ''
                        }
                        {(index < (steps.length-1)) ? 
                          <div className="next-btn"> 
                              <button className="next-button" type="button" onClick={nextStep}> Next </button>
                          </div>
                        : 
                          <div className="finish-btn"> 
                              <button className="finish-button" type="button" onClick={resetWorkflow}> Finish </button>
                          </div>
                        }
                      </div>

                    </div>

                    <FormGenerator currentstep={step} />

                    <div className="Steps-bottom">
                      <div className="prev-btn"> 
                        {(index > 0) ?
                          <button className="prev-button" type="button" onClick={prevStep}> Prev </button>
                        : ''
                        }
                      </div>
                      <div className="next-btn"> 
                        {(index < (steps.length-1)) ? 
                          <button className="next-button" type="button" onClick={nextStep}> Next </button>
                        : 
                          <button className="finish-button" type="button" onClick={resetWorkflow}> Finish </button>
                        }
                      </div>
                    </div>
                </FormTemplateContainer>
              </animated.div>
            )
          })}
      </React.Fragment>
    )
}


export default FormTemplate

