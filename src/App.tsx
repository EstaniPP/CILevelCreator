// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navBar'
import Creator from './routes/levelCreator'
import Manager from './routes/levelManager'
import Login from './routes/login'
import { useAuth } from './utils/hooks/useAuth'

const RestrictedPage: React.FC = ({ children }) => {
  const { user } = useAuth()
  return (
    <>
      {user ? children : <Navigate to='login'/>}
    </>
  )
}

function App () {
  return (
      <>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path="*" element={<RestrictedPage><Creator /></RestrictedPage>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/manage" element={<RestrictedPage><Manager /></RestrictedPage>} />
          <Route path="/create" element={<RestrictedPage><Creator /></RestrictedPage>} />
        </Routes>
      </div>
    </>
  )
}

export default App
