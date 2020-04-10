import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import { IconCogs } from '../../../../appsystem/assets/icons/admin'

const SubAppsNav = (props) => {
	const appstate = useSelector(state => state.appstateReducer)
	const dispatch = useDispatch()

	const getModuleAppValue = (moduleapp) => {
		let wrapper = document.getElementById('workspace-screen');
		wrapper.classList.add('is-submodule-selected');
		wrapper.classList.remove('is-submodule-open');
		wrapper.classList.remove('is-side-open');
		dispatch({ type: 'GET_MODULEAPP_VAL', _value:moduleapp });
	}

	return (
		<div className="SubApps-nav">
			<h3>Settings</h3>
			<ul className="SubApps-navigation">
				<li className={(appstate.valModuleapp === 'themeSettings') ? 'active' : ''}>
					<Link to="/" onClick={()=>getModuleAppValue('themeSettings')}>
						<IconCogs/>
						<div>Themes</div>
					</Link>
				</li>
				<li className={(appstate.valModuleapp === 'userSettings') ? 'active' : ''}>
					<Link to="/" onClick={()=>getModuleAppValue('userSettings')}>
						<IconCogs/>
						<div>Users</div>
					</Link>
				</li>
				<li className={(appstate.valModuleapp === 'authSettings') ? 'active' : ''}>
					<Link to="/" onClick={()=>getModuleAppValue('authSettings')}>
						<IconCogs/>
						<div>Auth</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default SubAppsNav