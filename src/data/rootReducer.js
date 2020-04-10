import { combineReducers } from 'redux'
import appstateReducer from './reducers/appstateReducer'
import themeReducer from './reducers/themeReducer'
import usercontextReducer from './reducers/usercontextReducer'
import stepReducer from './reducers/stepReducer';


export default combineReducers({
  appstateReducer: appstateReducer,
  themeReducer: themeReducer,
  usercontextReducer: usercontextReducer,
  stepReducer: stepReducer
});