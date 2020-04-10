import React from 'react'
import { useSelector } from 'react-redux'
import FormNavBar  from '../formsteps/FormNavBar'

const WorkflowContent = props => {

    const appstate = useSelector(state => state.appstateReducer)
    const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))

		return (
			<section className="Workflow-header">

        {userdata[0].applications.map((application, index) => {
          return (
            <React.Fragment key={index}>
              {application.modules.map((module, index) => {
                if(module.name === appstate.valModule){
                  return (
                    <React.Fragment key={index}>
                    {module.menus.map((menu, index) => {
                        return (
                          <React.Fragment key={index}>
                            {menu.menugroups.map((menugroup, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    {menugroup.workflows.map((workflow, index) => {
                                      if(workflow.name === appstate.valWorkflow){
                                        return (
                                          <div className="Workflow-header-details" key={index}>
                                            <h2>{workflow.friendlyname}</h2>
                                            <p>{workflow.description}</p>
                                          </div>
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

        <div className="Workflow-header-steps">
          <FormNavBar/>
        </div>
         
			</section>
		)
	
}

export default WorkflowContent