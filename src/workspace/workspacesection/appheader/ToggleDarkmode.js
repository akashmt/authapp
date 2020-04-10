import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToggleDarkmodeContainer } from '../../../appsystem/containers/appheader'

const ToggleDarkmode = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const dispatch = useDispatch()

	const handleThemeChange = e => {
		dispatch({ type: 'GET_THEME_VAL', _value:e.target.checked });
	}

	return (
		<ToggleDarkmodeContainer className="Toggle-darkmode darkmode-toggle">
			<input
				type="checkbox" 
				id="switch" 
				name="theme" 
				checked={appstate.theme} 
				onChange={handleThemeChange} />
			<label htmlFor="switch">Toggle</label>
		</ToggleDarkmodeContainer>
	)
}

export default ToggleDarkmode