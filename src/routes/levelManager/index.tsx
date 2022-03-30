import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { deleteLevel, getLevels } from '../../db'
import Card from '@mui/material/Card'
import './manager.css'
import { levelType } from '../../types'
import Board from '../../components/board'
import { Typography } from '@mui/material'
import BoardForm from '../../components/boardForm'
import { useAtom } from 'jotai'
import { download } from '../../utils/fileManager'
import { boardSize, showDeleteBanner } from '../../state'
import { MessageAlert } from './MessageAlert'

function Manager () {
  const [allLevels, setAllLevels] = useState<levelType[]>([])
  const [matrix, setMatrix] = useState<number[][]>([])
  const [index, setIndex] = useState(0)
  const [difficulty] = useAtom(boardSize)
  const [, setShow] = useAtom(showDeleteBanner)

  const getMatrix = (level: levelType) => {
    return level.rows.map(row => row.config.split('').map(char => parseInt(char)))
  }
  useEffect(() => {
    const setLevels = async () => {
      const levels = await getLevels(difficulty)
      setAllLevels(levels)
      setIndex(0)
    }
    setLevels()
  }, [difficulty])

  useEffect(() => {
    if (allLevels.length !== 0 && index < allLevels.length) {
      setMatrix(getMatrix(allLevels[index]))
    }
  }, [allLevels, index])

  const decreaseIndex = () => {
    if (index > 0) setIndex(prev => prev - 1)
  }

  const increaseIndex = () => {
    if (index < allLevels.length - 1) setIndex(prev => prev + 1)
  }

  const handleDelete = async () => {
    setAllLevels(await deleteLevel(difficulty, allLevels[index]?.id, allLevels))
    console.log('a')
    setShow(true)
  }

  return (
    <>
      <MessageAlert/>
      <Card className='Card'>
        <h1>Manage Levels</h1>
        <BoardForm/>
        { allLevels.length === 0 &&
        <Typography>There are no {difficulty} levels.</Typography>
        }
        { allLevels.length > 0 &&
          <>
            <div className='LevelPaginator'>
              <Button className='PaginationButton' onClick={decreaseIndex}>&lt;</Button>
              <Typography className='Typography'>{allLevels[index]?.id}</Typography>
              <Button className='PaginationButton' onClick={increaseIndex}>&gt;</Button>
            </div>
            <Board matrix={matrix} />
            <Button
              className={'Button'}
              style={{ marginBottom: '20px' }}
              onClick={handleDelete}
              variant="contained"
              color="error">
                Delete level
            </Button>
            <Button
              className={'Button'}
              onClick={() => download(allLevels)}
              variant="contained">
                Download levels
            </Button>
          </>
        }
      </Card>
    </>
  )
}

export default Manager
