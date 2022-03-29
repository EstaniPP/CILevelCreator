import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import logo from './images/Logo.svg'
import Creator from './routes/levelCreator'
import Manager from './routes/levelManager'

const NavBar = () => {
  return (
    <nav>
    <img className='imgLogo' src={logo} alt="PipPop! logo"/>
    <ul>
      <Link to="create"><li>Create</li></Link>
      <Link to="manage"><li>Manage</li></Link>
    </ul>
  </nav>
  )
}
function App () {
  return (
      <>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Creator />} />
          <Route path="/manage" element={<Manager />} />
          <Route path="/create" element={<Creator />} />
        </Routes>
      </div>
    </>
  )
}

export default App
