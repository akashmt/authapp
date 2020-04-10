import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { WorkspaceSectionContainer } from '../../appsystem/containers/workspace'
import AppHeader from './appheader/AppHeader'
import AppsHeader from './appsheader/AppsHeader'
import Dashboard from './dashboard/Dashboard'
import ModuleArea from './module/Module'
import WorkflowArea from './workflow/Workflow'
import ThemeSettings from './settings/themesettings/ThemeSettings'
import UserSettings from './settings/usersettings/UserSettings'

const WorkspaceSection = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext)
	const dispatch = useDispatch()

	// Set first modules as a initial state value(valModule)
	useEffect(() => {
		const setDefaultModule = () => {
			let i = 0
			userdata[0].applications.map((application) => (
				application.modules.map((module) => {
					if(i === 0) {
						dispatch({ type: 'GET_MODULE_VAL', _value:module.name })
						i = i+1
					} 
					return (null)
				})
			))
		}

		if(props.location.pathname !== '/') {
			dispatch({ type: 'GET_MODULEAPP_VAL', _value:'feedback' })
		} else {
			setDefaultModule();
		}
	}, [])

	// Set agency as a initial state value(valAgency) if only one agency.
	useEffect(() => {
		const setSingleAgency = () => {
			userdata[0].applications.map((application) => (
				application.modules.map((module) =>{
					if(module.name === appstate.valModule && module.agencies.length === 1) {
						module.agencies.map((agency) => {
							return(
								dispatch({ type: 'GET_AGENCY_VAL', _value:agency.name })
							)
						})
					} 
					return (null)
				})
			))
		}
		setSingleAgency()
	}, [appstate.valModule])

	let WorkspaceArea

	if(appstate.valModuleapp==="themeSettings"){
		WorkspaceArea = "ThemeSettings"
	} else if(appstate.valModuleapp==="userSettings"){
		WorkspaceArea = "UserSettings"
	} else if(appstate.valWorkflow){
		WorkspaceArea = "Workflow"
	} else if(appstate.valModule){
		WorkspaceArea = "Module"
	} else {
		WorkspaceArea =  "Feedback"
	}

	return (
		<WorkspaceSectionContainer className="Workspace-section">
			<AppHeader/>
			<AppsHeader/>
			{/* <WorkspaceArea/> */}
			{(() => {
				switch(WorkspaceArea) {
					case 'ThemeSettings':
						return <ThemeSettings/>
					case 'UserSettings':
						return <UserSettings/>
					case 'Workflow':
						return <WorkflowArea/>
					case 'Module':
						return <ModuleArea/>
					default:
						return <Dashboard/>;
				}
				}
			)()}
		</WorkspaceSectionContainer>
	)
}

export default WorkspaceSection