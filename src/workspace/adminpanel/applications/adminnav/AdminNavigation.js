import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { AdminNavigationContainer } from '../../../../appsystem/containers/adminpanel'
import Settings from '../Settings'
import { LogoExtraDutyStacked, LogoOnDuty } from '../../../../appsystem/assets/icons/brand'

const AdminNavigation = () => {
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(
		userdata => (userdata.ifAuthToken !== '')
	))
	const dispatch = useDispatch()

	const getModuleValue = (moduleName, submodule) => {
		if(submodule === true) {
			let wrapper = document.getElementById('workspace-screen');
			wrapper.classList.toggle('is-submodule-open');
			dispatch({ type: 'GET_MODULE_VAL', _value:moduleName });
		}
		else {
			let wrapper = document.getElementById('workspace-screen');
			wrapper.classList.toggle('is-side-open');
			wrapper.classList.remove('is-submodule-open');
			dispatch({ type: 'GET_MODULE_VAL', _value:moduleName });
		}
	}

	return (
		<AdminNavigationContainer className="App-AdminNavigation">
			<ul className="module-list">
				{userdata[0].applications.map((application, index) => {
					return (
						<React.Fragment key={index}>
						{application.modules.map((module, index) => {
								return (
									<li key={index}>
										<Link to="/" onClick={()=>getModuleValue(module.name, module.submodule)}>
											{(application.name === 'XtraDutyApplication') 
												? <LogoExtraDutyStacked/>
												: <LogoOnDuty/>
											}
											<span>{module.shortname}</span>
										</Link>
										{
											(module.submodule)
												? <Settings module={module}/>
												: (null)
										}
									</li>
								)
						})}
						</React.Fragment>
					)
				})}
			</ul>
		</AdminNavigationContainer>
	)
}

export default AdminNavigation