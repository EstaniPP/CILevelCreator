import './board.css'

type TileType = {
  rowIndex: number;
  columnIndex: number;
  matrix: number[][];
  onTileClick?: (rowIndex: number, columnIndex: number) => void
}

type BoardType = {
  onTileClick?: (rowIndex: number, columnIndex: number) => void
  matrix: number[][]
}

const Tile = ({ rowIndex, columnIndex, matrix, onTileClick } : TileType) => {
  return (
    <div
      className={`field ${matrix[rowIndex][columnIndex] ? 'back-black' : 'back-white'}`}
      onClick={() => onTileClick && onTileClick(rowIndex, columnIndex)}
    />
  )
}
const Board = ({ matrix, onTileClick }: BoardType) => {
  return (
    <div className="board">
      {matrix.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
              {row.map((_, columnIndex) => {
                return <Tile key={`${columnIndex}${rowIndex}`} rowIndex={rowIndex} columnIndex={columnIndex} matrix={matrix} onTileClick={onTileClick}/>
              })}
          </div>
        )
      })}
    </div>
  )
}

export default Board
