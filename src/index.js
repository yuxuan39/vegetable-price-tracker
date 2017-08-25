import React from 'react'
import ReactDOM from 'react-dom'

// global import
import 'isomorphic-fetch'

// basic styles
import 'normalize.css'
import './styles/index.scss'


import App from './components/App/'

import registerServiceWorker from './registerServiceWorker'

localStorage.debug = 'container:*'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

registerServiceWorker()
