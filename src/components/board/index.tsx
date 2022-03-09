import { memo, useState } from 'react'
import './board.css'

const Tile = ({rowIndex, columnIndex, matrix} : {rowIndex: number, columnIndex: number, matrix: number[][]}) => {
  const value = matrix[rowIndex][columnIndex]
  const [number, setNumber] = useState(true)
  const fillTile = (rowIndex: number, columnIndex: number) => {
    const newNumber = value ? 0 : 1
    setNumber(prev => !prev)
    matrix[rowIndex][columnIndex] = newNumber
  }
  return(
    <div 
      className={`field ${value ? 'back-black':'back-white'}`}
      onClick={()=> fillTile(rowIndex, columnIndex)}
    >
    </div>
  )
}
const Board = ( {matrix}: {matrix: number[][]}) => {
  return (
    <div className="board">
      {matrix.map((row,rowIndex)=>{
        return(
          <div key={rowIndex}>
              {row.map((_,columnIndex)=>{
               return <Tile key={`${columnIndex}${rowIndex}`} rowIndex={rowIndex} columnIndex={columnIndex} matrix={matrix} />
              })}
          </div>
        )
      })}
    </div>
  )
}

export default Board;