import React from 'react'
import { useSelector } from 'react-redux'
import { MenuGroupTitleContainer } from '../../../../../../appsystem/containers/module'
import { IconEllipsisV } from '../../../../../../appsystem/assets/icons/menu'

const MenuGroupTitle = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(
		userdata => (userdata.ifAuthToken !== '')
	))

	return (
		<MenuGroupTitleContainer className="Module-menugrouptitle">
			{userdata[0].applications.map((application, index) => {
				return (
					<React.Fragment key={index}>
						{application.modules.map((module, index) => {
								if(module.name === appstate.valModule) {
									return (
										<React.Fragment key={index}>
											{module.menus.map((menu, index) => {
												return (
													<h4 key={index}>
														<IconEllipsisV/>
														<span>{menu.friendlyname}</span>
													</h4>
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
		</MenuGroupTitleContainer>
	)
}

export default MenuGroupTitle