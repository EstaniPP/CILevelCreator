import './App.css'
import logo from './images/Logo.svg'
import Creator from './routes/levelCreator'

const NavBar = () => {
  return (
    <nav>
    <img className='imgLogo' src={logo} alt="PipPop! logo"/>
    <ul>
      <li><h4>a</h4></li>
      <li><h4>b</h4></li>
    </ul>
  </nav>
  )
}
function App () {
  return (
    <div className='App' style={{ minHeight: '700px' }}>
      <NavBar />
      <Creator/>
    </div>
  )
}

export default App
