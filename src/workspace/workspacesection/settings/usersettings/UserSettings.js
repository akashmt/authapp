import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ModuleContainer, ModuleAsideContainer, ModuleMainContainer } from '../../../../appsystem/containers/module'
import Aside from './components/Aside'
import UserSetting1 from './components/UserSetting1'
import UserSetting2 from './components/UserSetting2'

export default class UserSettings extends Component {
	render(){
		return (
			<Router>
				<ModuleContainer className="Module-area">
					<ModuleAsideContainer className="Module-aside">
						<Aside/>
					</ModuleAsideContainer>
					<ModuleMainContainer className="Module-main">
						<Switch>
							<Route path="/" exact component={() => <UserSetting1/>} />
							<Route path="/user-setting2" exact component={() => <UserSetting2/>} />
						</Switch>
					</ModuleMainContainer>
				</ModuleContainer>
			</Router>
		)
	}
}


