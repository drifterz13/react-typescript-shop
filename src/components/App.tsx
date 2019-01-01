import * as React from 'react'
import { Router } from '@reach/router'
import GlobalStyle from '../styled/global-style'

import Main from './Main'
import Shop from './Shop'
import Signup from './Signup'
import Auth from './Auth'

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Auth>
          {({ createAccount, error, clearError, authStatus, ...rest }) => (
            <Router>
              <Main path='/' {...rest} authStatus={authStatus} error={error} />
              <Signup
                path='/signup'
                createAccount={createAccount}
                error={error}
                clearError={clearError}
                authStatus={authStatus}
              />
              <Shop path='/shop' />
            </Router>
          )}
        </Auth>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}
