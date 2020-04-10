import React from 'react'
import { useSelector } from 'react-redux'
import { WfMenuGroupTitleContainer } from '../../../../../../appsystem/containers/workflow'
import { IconEllipsisV } from '../../../../../../appsystem/assets/icons/menu'

const WfMenuGroupTitle = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))

	return (
		<WfMenuGroupTitleContainer className="Workflow-menugrouptitle">
			{userdata[0].applications.map((application, index) => {
					return (
						<React.Fragment key={index}>
							{application.modules.map((module, index) => {
								if(module.name === appstate.valModule ) {
									return (
										<React.Fragment key={index}>
											{module.menus.map((menu, index) => {
												return (
													<React.Fragment key={index}>
														{menu.menugroups.map((menugroup, index) => {
															return (
																<React.Fragment key={index}>
																	{menugroup.workflows.map((workflow, index) => {
																		if(workflow.name === appstate.valWorkflow) {
																			return (
																				<h4 key={index}>
																					<IconEllipsisV/>
																					<span>{workflow.friendlyname}</span>
																				</h4>
																			)
																		}
																		return (null)
																	})}
																</React.Fragment>
															)
														})}
													</React.Fragment>
												)
											})}
										</React.Fragment>
									)
								}
								return (null)
							})}
						</React.Fragment>
					)
			})}
		</WfMenuGroupTitleContainer>
	)
	
}

export default WfMenuGroupTitle