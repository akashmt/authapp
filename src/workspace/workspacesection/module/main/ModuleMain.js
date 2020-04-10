import React from 'react'
import { useSelector } from 'react-redux'
import DashboardCards from './DashboardCards'
import WorkflowsStatus from './WorkflowsStatus'

import { ModuleMainContainer } from '../../../../appsystem/containers/module'

const ModuleMain = props => {
    
    const appstate = useSelector(state => state.appstateReducer)
    const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))

		return (
			<ModuleMainContainer className="Module-main">
        <div className="Module-content">
          {userdata[0].applications.map((application, index) => {
            return (
              <React.Fragment key={index}>
                {application.modules.map((module, index) =>{
                  if(module.name === appstate.valModule) {
                    return (
                      <React.Fragment key={index}>
                        <h2>{module.friendlyname} Dashboard</h2>
                        {module.description}
                      </React.Fragment>
                    )
                  } else {
                    return (null);
                  }
                })}
              </React.Fragment>
            )
          })}
        </div>

        <DashboardCards/>

        <WorkflowsStatus/>

        <div className="Module-content-twocolumn">
          <div className="Module-content Module-left">
            <h3>Block3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum laboriosam inventore consequatur corporis quod impedit magni at minima quam, dignissimos ipsam doloribus incidunt beatae quidem quasi eos molestias hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="Module-content Module-right">
            <h3>Block3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum laboriosam inventore consequatur corporis quod impedit magni at minima quam, dignissimos ipsam doloribus incidunt beatae quidem quasi eos molestias hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

			</ModuleMainContainer>
		)
	
}

export default ModuleMain