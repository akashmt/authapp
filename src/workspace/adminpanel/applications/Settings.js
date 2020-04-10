import React from 'react'
import { useSelector } from 'react-redux'
import { SettingsContainer } from '../../../appsystem/containers/adminpanel'
import SubAppsNav from './adminnav/SubAppsNav'

const Settings = (props) => {
	const appstate = useSelector(state => state.appstateReducer)
	const module = props.module

	return (
		<SettingsContainer className={
			appstate.valModule === module.name 
				? 'Settings active'
				: 'Settings'}>
			<SubAppsNav/>
		</SettingsContainer>
	)
}

export default Settings
