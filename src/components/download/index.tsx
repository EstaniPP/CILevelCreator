
import Button from '@mui/material/Button'
import { levelType } from '../../types'
import db from '../../db'

const format = (matrix: number[][], size: string) : levelType => {
  const file:levelType = {
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
  return file
}

const download = (matrix: number[][], size: string) => {
  const element = window.document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(format(matrix, size), null, 4)))
  element.setAttribute('download', 'Exercise')
  element.style.display = 'none'
  window.document.body.appendChild(element)
  element.click()
  window.document.body.removeChild(element)
}

const upload = (matrix: number[][], size: string) => {
  db.addNewLevel(format(matrix, size))
}

const Download = ({ matrix, size }: {matrix: number[][], size: string}) => {
  return (
    <Button
      variant="contained"
      onClick={() => upload(matrix, size)}
    >
      Upload
    </Button>
  )
}

export default Download
