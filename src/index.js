import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './data/store'

import Documentation from './private/docs/Documentation'
import App from './App'

import * as serviceWorker from './appsystem/workers/serviceWorker'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/"  strict={true} component={App} />
        <Route path="/docs" exact={true} strict={true} component={Documentation} />
			</Switch>
		</Router>
	</Provider>, 
document.getElementById('root'));

serviceWorker.unregister();