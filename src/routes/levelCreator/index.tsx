import { useEffect, useState } from 'react'
import Board from '../../components/board'
import BoardForm from '../../components/boardForm'
import Download from '../../components/download'
import Card from '@mui/material/Card'
import './creator.css'

export const heights = {
  easy: 4,
  medium: 6,
  hard: 8
}

function Creator () {
  const [size, setSize] = useState<keyof typeof heights>('medium')
  const [matrix, setMatrix] = useState(Array<number>(6).fill(0).map(() => Array<number>(6).fill(0)))

  useEffect(() => {
    const height = heights[size]
    setMatrix(new Array(height).fill(0).map(() => Array(6).fill(0)))
  }, [size])

  useEffect(() => {
    setBoard(<Board matrix={matrix} onTileClick={fillTile}/>)
  }, [matrix])

  const fillTile = (rowIndex: number, columnIndex: number) => {
    const newNumber = matrix[rowIndex][columnIndex] ? 0 : 1
    matrix[rowIndex][columnIndex] = newNumber
    setBoard(<Board matrix={matrix} onTileClick={fillTile}/>)
  }

  const [board, setBoard] = useState(
    <Board
      matrix={matrix}
      onTileClick={fillTile}
    />
  )

  return (
    <Card className='Card'>
      <h1>Color Inc level creator</h1>
      <div className='Form'>
        <BoardForm
          size={size}
          setSize={setSize}
        />
        { board }
      </div>
      <Download matrix={matrix} size={size}/>
    </Card>
  )
}

export default Creator
