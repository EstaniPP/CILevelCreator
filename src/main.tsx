import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
