import React from 'react'
import { useSelector } from 'react-redux'
import { IconPolicemanShield, IconFiremanShield } from '../../../../../appsystem/assets/icons/brand'

const AgencyBrandCurrent = ({ selectedAgencyType }) => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))
	
	const getAgencyType = (type) => {
		selectedAgencyType(type)
	}

	return (
		<React.Fragment>
			{userdata[0].applications.map((application, index) => {
				return (
					<React.Fragment key={index}>
						{application.modules.map((module, index) => {
							if(module.name === appstate.valModule ) {
								return (
									<React.Fragment key={index}>
										{module.agencies.map((agency, index) => {
											if(agency.name === appstate.valAgency ) {
												return (
													<span key={index}> 
														{(() => {
															switch(agency.type) {
																case 'police':
																	return <IconPolicemanShield/>
																case 'fire':
																	return <IconFiremanShield/>
																default:
																	return null
															}
														})()}
														{getAgencyType(agency.type)}
														{agency.friendlyname}
													</span>
												)
											}
											return (null)
										})}
									</React.Fragment>
								)
							}
							return (null)
						})}
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

export default AgencyBrandCurrent