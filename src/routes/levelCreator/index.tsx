import { useEffect, useState } from 'react'
import Board from '../../components/board'
import BoardForm from '../../components/boardForm'
import Upload from '../../components/upload'
import Card from '@mui/material/Card'
import './creator.css'
import { useAtom } from 'jotai'
import { boardSize } from '../../state'
import { MessageAlert } from './MessageAlert'

export const heights = {
  easy: 4,
  medium: 6,
  hard: 8
}

function Creator () {
  const [size] = useAtom(boardSize)
  const [matrix, setMatrix] = useState(Array<number>(6).fill(0).map(() => Array<number>(6).fill(0)))

  useEffect(() => {
    const height = heights[size]
    setMatrix(new Array(height).fill(0).map(() => Array(6).fill(0)))
  }, [size])

  const fillTile = (rowIndex: number, columnIndex: number) => {
    const newNumber = matrix[rowIndex][columnIndex] ? 0 : 1
    matrix[rowIndex][columnIndex] = newNumber
    setMatrix([...matrix])
  }

  return (
    <>
      <MessageAlert />
      <Card className='Card'>
        <h1>Color Inc level creator</h1>
        <div className='Form'>
          <BoardForm />
          <Board
            matrix={matrix}
            onTileClick={fillTile}
          />
        </div>
        <Upload matrix={matrix} size={size} />
      </Card>
    </>
  )
}

export default Creator
