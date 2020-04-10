import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsercontext } from './data/actions/usercontextActions'
import { getTheme } from './data/actions/themeActions'

import { ThemeProvider } from 'styled-components'
import AppStyles from './appsystem/globalstyles'
import Page from './public/Page'
import Workspace from './workspace/Workspace'

import { AppContainer } from './appsystem/containers/AppContainer'


const App = (props) => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getUsercontext())
    dispatch(getTheme())
  }, [dispatch]);

  const appstate = useSelector(state => state.appstateReducer)
  const usercontext = useSelector(state => state.usercontextReducer.usercontext)
  const styleslight = useSelector(state => state.themeReducer.styleslight)
  const stylesdark = useSelector(state => state.themeReducer.stylesdark)

	return (
		<ThemeProvider theme={(appstate.theme === false) ? styleslight : stylesdark}>
      <AppContainer className="App">
        <AppStyles/>
        {usercontext.map((user, index) => {
          return (
            <React.Fragment key={index}>
              {(user.ifAuthToken)
                ? <Workspace {...props}/>
                : <Page />}
            </React.Fragment>
          )
        })}
      </AppContainer>
		</ThemeProvider>
	)
}

export default App