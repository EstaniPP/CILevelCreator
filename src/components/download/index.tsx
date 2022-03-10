
import Button from '@mui/material/Button'

const format = (matrix: number[][], size: string) : string => {
  const file:{id: number, difficulty:string, rows:Array<{config: string}>} = {
    id: 0,
    difficulty: size,
    rows: []
  }
  matrix.forEach(row => {
    const config = row.reduce((total, current) => {
      return total + current.toString()
    }, '')
    file.rows.push(
      {
        config: config
      }
    )
  })
  return JSON.stringify(file, null, 4)
}

const download = (matrix: number[][], size: string) => {
  const element = window.document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(format(matrix, size)))
  element.setAttribute('download', 'Exercise')
  element.style.display = 'none'
  window.document.body.appendChild(element)
  element.click()
  window.document.body.removeChild(element)
}

const Download = ({ matrix, size }: {matrix: number[][], size: string}) => {
  return (
    <Button
      variant="contained"
      onClick={() => download(matrix, size)}
    >
      Download
    </Button>
  )
}

export default Download
