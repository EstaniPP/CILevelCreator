
import Button from '@mui/material/Button'
import { levelType } from '../../types'
import { addNewLevel } from '../../db'
import { useEffect, useState } from 'react'
import { Alert, AlertColor, Collapse, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

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

const Upload = ({ matrix, size }: {matrix: number[][], size: string}) => {
  const [success, setSuccess] = useState<AlertColor>()
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const upload = async (matrix: number[][], size: string) => {
    setLoading(true)
    const created = await addNewLevel(format(matrix, size))
    if (created) {
      setSuccess('success')
    } else {
      setSuccess('error')
    }
    setLoading(false)
    setShow(true)
  }

  useEffect(() => {
    setShow(false)
  }, [size])

  return (
    <>
      <Collapse in={show}>
        <Alert
          severity={success}
          action={<IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setShow(false)
            } }
          >
            <Close/>
          </IconButton>}
          sx={{ mb: 2 }}
        >
          {success === 'success' ? 'Level created succesfully!' : 'Level already exists, please create a new one.'}
        </Alert>
      </Collapse>
      <Button
        disabled={loading}
        variant="contained"
        onClick={() => upload(matrix, size)}
      >
        Upload
      </Button>
    </>
  )
}

export default Upload
