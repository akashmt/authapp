import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MenuGroupItemsContainer } from '../../../../../../appsystem/containers/module'
import { IconAngleRight } from '../../../../../../appsystem/assets/icons/direction'
import { IconFolder, IconFolderOpen } from '../../../../../../appsystem/assets/icons/menu'

const MenuGroupItems = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))
	const dispatch = useDispatch()

	// Set Menugroup Value On Click
	const getMenugroupValue = (index,event) => {
		dispatch({ type: 'GET_ACTIVEINDEX_VAL', _value:index })
		dispatch({ type: 'GET_MENUGROUP_VAL', _value:event })
	}

	// Set Workflow Value On Click
	const getWorkflowValue = (event) => {
		dispatch({ type: 'GET_WORKFLOW_VAL', _value:event })
	}

	return (
		<MenuGroupItemsContainer className="Module-menugroupitems">
			{userdata[0].applications.map((application, index) => {
					return (
						<React.Fragment key={index}>
							{application.modules.map((module, index) => {
								if(module.name === appstate.valModule) {
									return (
										<React.Fragment key={index}>
											{module.menus.map((menu, index) => {
													return (
														<React.Fragment key={index}>
															<ul className="Menus-workflows">
																{menu.menugroups.map((menugroup, index) => {
																	return (
																		<li key={index} 
																				className={(appstate.activeIndex === index || appstate.valMenugroup === menugroup.name) ? 'open' : 'close'}>
																			<span className="tab-title" 
																						onClick={()=>{getMenugroupValue(index, menugroup.name)}}>
																				{(appstate.activeIndex === index || appstate.valMenugroup === menugroup.name) 
																					? <IconFolderOpen/> 
																					: <IconFolder/>}
																				{menugroup.friendlyname}
																			</span>
																			<ul key={index} 
																					className={(appstate.activeIndex === index || appstate.valMenugroup === menugroup.name) ? "tab-items show" : "tab-items hide"}>
																				{menugroup.workflows.map((workflow, index) => {
																						return (
																							<li key={index}>
																								<Link to="/" 
																											onClick={() => getWorkflowValue(workflow.name)}>
																									<IconAngleRight/>
																									<span>{workflow.friendlyname}</span>
																								</Link>
																							</li>
																						)
																				})}
																			</ul>
																		</li>
																	)
																})}
															</ul>
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
		</MenuGroupItemsContainer>
	)
}

export default MenuGroupItems