import * as React from 'react'
import 'babel-polyfill'
import { render } from 'react-dom'

import App from './components/App'

if (module.hot) {
  module.hot.accept()
}

render(<App />, document.getElementById('root'))
