import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/CILevelCreator/*" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
