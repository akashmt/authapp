import { CREATE_STEPS, SET_ACTIVE_STEP, SET_FORM_STEP_VALUE } from '../actions/stepConsts';

const initialState = {
  steps: [],
  activeStep: 0,
  formstate: {}
}

export default function(state = initialState, action) {

	switch(action.type) {

		case CREATE_STEPS:
			return {
				...state,
				steps: action.payload
      }
    case SET_ACTIVE_STEP:
			return {
				...state,
				activeStep: action._value
      }
    case SET_FORM_STEP_VALUE:
			return {
				...state,
				formstate: { ...state.formstate,[action._key]: action._value }
      }
		default:
			return state;
	}

}