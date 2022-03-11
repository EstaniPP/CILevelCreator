import { useEffect, useState } from 'react'
import Board from './components/board'
import BoardForm from './components/boardForm'
import Download from './components/download'
import Card from '@mui/material/Card'
import './App.css'
import logo from './images/Logo.svg'

export const heights = {
  easy: 4,
  medium: 6,
  hard: 8
}

function App () {
  const [size, setSize] = useState<keyof typeof heights>('medium')
  const [matrix, setMatrix] = useState(Array<number>(6).fill(0).map(() => Array<number>(6).fill(0)))

  useEffect(() => {
    const height = heights[size]
    setMatrix(new Array(height).fill(0).map(() => Array(6).fill(0)))
  }, [size])

  return (
    <div className='App' style={{ height: window.innerHeight }}>
      <img className='imgLogo' src={logo} alt="PipPop! logo"/>
      <Card className='Card'>
            <h1>Color Inc level creator</h1>
            <div className='Form'>
              <BoardForm
                size={size}
                setSize={setSize}
              />
              <Board matrix={matrix}/>
            </div>
            <Download matrix={matrix} size={size}/>
      </Card>
    </div>
  )
}

export default App
