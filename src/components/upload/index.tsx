
import Button from '@mui/material/Button'
import { levelType } from '../../types'
import { addNewLevel } from '../../db'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { showSucessBanner, successBannerMsj } from '../../state'

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
  const [, setSuccess] = useAtom(successBannerMsj)
  const [loading, setLoading] = useState(false)
  const [, setShow] = useAtom(showSucessBanner)

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
  }, [size, matrix])

  return (
      <Button
        disabled={loading}
        variant="contained"
        onClick={() => upload(matrix, size)}
      >
        Upload
      </Button>
  )
}

export default Upload
