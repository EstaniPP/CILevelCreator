// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'
import logo from './images/Logo.svg'
import Creator from './routes/levelCreator'
import Manager from './routes/levelManager'
import Login from './routes/login'
import { useAuth } from './utils/hooks/useAuth'

const NavBar = () => {
  const { user, signout } = useAuth()

  return (
    <nav>
    <img className='imgLogo' src={logo} alt="PipPop! logo"/>
    {user &&
      <ul>
        <Link to="create"><li className='nav'>Create</li></Link>
        <Link to="manage"><li className='nav'>Manage</li></Link>
        <li className='nav' onClick={signout} >Logout</li>
      </ul>
    }
  </nav>
  )
}

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
