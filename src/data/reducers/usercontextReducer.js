import { GET_USERCONTEXT } from '../actions/usercontextConsts'

const initialState = {
  usercontext: []
}

export default function(state = initialState, action) {
  switch(action.type) {

		case GET_USERCONTEXT:
			return {
				...state,
				usercontext: action.payload
			}

		default:
			return state;

  }
}