import * as React from 'react'
import { Router } from '@reach/router'
import GlobalStyle from '../styled/global-style'

import Main from './Main'
import Shop from './Shop'

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Main path='/' />
          <Shop path='/shop' />
        </Router>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}
