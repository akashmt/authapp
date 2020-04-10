import React from 'react'
import { useSelector } from 'react-redux'
import { AppsBrandContainer } from '../../../../appsystem/containers/appsheader'
import { LogoExtraDutyStacked, LogoOnDuty } from '../../../../appsystem/assets/icons/brand'

const AppsBrand = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))

	return (
		<AppsBrandContainer>
			{userdata[0].applications.map((application, index) => {
				return (
					<React.Fragment key={index}>
						{application.modules.map((module, index) =>{
							if(module.name === appstate.valModule) {
								return (
									<React.Fragment key={index}>
										{/* {application.friendlyname} */}
										{(application.name === 'XtraDutyApplication') 
											? <LogoExtraDutyStacked/>
											: <LogoOnDuty/>
										}
									</React.Fragment>
								)
							} else {
								return (null);
							}
						})}
					</React.Fragment>
				)
			})}
		</AppsBrandContainer>
	)
}

export default AppsBrand