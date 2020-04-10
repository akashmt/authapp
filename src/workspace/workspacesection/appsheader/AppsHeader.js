import React from 'react'
import { useSelector } from 'react-redux'
import { AppsHeaderContainer } from '../../../appsystem/containers/appsheader'
import AppsBrand from './brandsection/AppsBrand'

import AgencySwitcher from './agencysection/AgencySwitcher'
import ModuleName from './modulesection/ModuleName'

const AppsHeader = props => {
	const appstate = useSelector(state => state.appstateReducer)

	return (
		<AppsHeaderContainer className="Apps-header">
			<section className="Brand-section">
				{appstate.valModule ? <AppsBrand/> : ''}
			</section>

			<section className="Module-section">
				<ModuleName/>
			</section>

			<section className="Agency-section">
				<AgencySwitcher/>
			</section>
		</AppsHeaderContainer>
	)
}

export default AppsHeader