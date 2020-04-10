import React from 'react'
import { useSelector } from 'react-redux'
import { ModuleNameContainer } from '../../../../appsystem/containers/appsheader'
import { IconUser } from '../../../../appsystem/assets/icons/user'

const ModuleName = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))
	
	return (
		<ModuleNameContainer>
			{(appstate.valModule)
				?	<>
						{userdata[0].applications.map((application, index) => {
							return (
								<React.Fragment key={index}>
									{application.modules.map((module, index) => {
										if(module.name === appstate.valModule) {
											return ( 
												<React.Fragment key={index}>
													<IconUser/><h3>{module.shortname}</h3>
												</React.Fragment>
											)
										}
										return (null)
									})}
								</React.Fragment>
							)
						})}
					</>
				: <h3>Select Module</h3>
			}
		</ModuleNameContainer>
	)
}

export default ModuleName