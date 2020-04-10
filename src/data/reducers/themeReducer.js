import { GET_THEME } from '../actions/themeConsts'

const initialState = {
  styleslight: {
    AppGlobal: {},
    AppNavPanel: {},
    AppHeader: {},
    AppsHeader: {},
    Modules: {},
    AppForms: {}
  },
  stylesdark: {
    AppGlobal: {},
    AppNavPanel: {},
    AppHeader: {},
    AppsHeader: {},
    Modules: {},
    AppForms: {}
  }
}

export default function(state = initialState, action) {

  switch(action.type) {

		case GET_THEME:
			return {
				...state,
        styleslight: action.payload.light,
        stylesdark: action.payload.dark,
			}

		default:
			return state;

  }
}