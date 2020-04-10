import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ModuleContainer, ModuleAsideContainer, ModuleMainContainer } from '../../../../appsystem/containers/module'
import Aside from './components/Aside'
import Theme from './components/Theme'

export default class ThemeSettings extends Component {
	render(){
		return (
			<Router>
				<ModuleContainer className="Module-area">
					<ModuleAsideContainer className="Module-aside">
						<Aside/>
					</ModuleAsideContainer>
					<ModuleMainContainer className="Module-main">
						<Switch>
							<Route path="/" exact component={() => <Theme/>} />
						</Switch>
					</ModuleMainContainer>
				</ModuleContainer>
			</Router>
		)
	}
}


