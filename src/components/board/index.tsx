import { useEffect, useState } from 'react'
import './board.css'

const Tile = ({ rowIndex, columnIndex, matrix } : {rowIndex: number, columnIndex: number, matrix: number[][]}) => {
  const [number, setNumber] = useState(matrix[rowIndex][columnIndex])

  const fillTile = (rowIndex: number, columnIndex: number) => {
    const newNumber = number ? 0 : 1
    setNumber(newNumber)
    matrix[rowIndex][columnIndex] = newNumber
  }

  useEffect(() => {
    setNumber(matrix[rowIndex][columnIndex])
  }, [matrix[rowIndex][columnIndex]])

  return (
    <div
      className={`field ${number ? 'back-black' : 'back-white'}`}
      onClick={() => fillTile(rowIndex, columnIndex)}
    >
    </div>
  )
}
const Board = ({ matrix }: {matrix: number[][]}) => {
  return (
    <div className="board">
      {matrix.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
              {row.map((_, columnIndex) => {
                return <Tile key={`${columnIndex}${rowIndex}`} rowIndex={rowIndex} columnIndex={columnIndex} matrix={matrix} />
              })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
