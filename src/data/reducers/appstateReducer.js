const GET_THEME_VAL = 'GET_THEME_VAL';
const GET_AGENCY_VAL = 'GET_AGENCY_VAL';
const GET_MODULE_VAL = 'GET_MODULE_VAL';
const GET_MENUGROUP_VAL = 'GET_MENUGROUP_VAL';
const GET_WORKFLOW_VAL = 'GET_WORKFLOW_VAL';
const RESET_WORKFLOW_VAL = 'RESET_WORKFLOW_VAL';
const GET_SEARCH_VAL = 'GET_SEARCH_VAL';
const GET_ACTIVEINDEX_VAL = 'GET_ACTIVEINDEX_VAL';
const GET_MODULEAPP_VAL = 'GET_MODULEAPP_VAL';

const initialState = {
  theme: false,
  valAgency: '',
  valModule: '',
  valMenugroup: '',
  valWorkflow: '',
  searchString: '',
  activeIndex: 0,
  valModuleapp: ''
}

export default function(state = initialState, action = {}) {

  switch(action.type) {
    case GET_THEME_VAL:
      return {
        ...state,
        theme: action._value,
      }
		case GET_AGENCY_VAL:
			return {
				...state,
        valAgency: action._value,
        valWorkflow: '',
        searchString: ''
      }
    case GET_MODULE_VAL:
			return {
				...state,
        valModule: action._value,
        valModuleapp: '',
        valWorkflow: '',
        valAgency: ''
      }
    case GET_MENUGROUP_VAL:
			return {
				...state,
        valMenugroup: action._value,
      }
    case GET_WORKFLOW_VAL:
			return {
				...state,
        valWorkflow: action._value,
      }
    case RESET_WORKFLOW_VAL:
			return {
				...state,
        valWorkflow: action._value,
      }
    case GET_SEARCH_VAL:
			return {
				...state,
        searchString: action._value,
      }
    case GET_ACTIVEINDEX_VAL:
			return {
				...state,
        activeIndex: action._value,
      }
    case GET_MODULEAPP_VAL:
      return {
        ...state,
        valModuleapp: action._value,
      }

		default:
			return state;

  }
}