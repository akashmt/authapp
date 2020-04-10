import React from 'react'
import AdminPanel from './adminpanel/AdminPanel'
import WorkspaceSection from './workspacesection/WorkspaceSection'
import { WorkspaceContainer } from '../appsystem/containers/workspace'

const Workspace = props => {
	return (
		<WorkspaceContainer id="workspace-screen" className="Workspace">
			<AdminPanel/> 
			<WorkspaceSection {...props}/>
		</WorkspaceContainer>
	)
}

export default Workspace