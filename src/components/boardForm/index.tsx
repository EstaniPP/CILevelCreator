import './boardForm.css'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from '@mui/material'
import { heights } from '../../routes/levelCreator'
import { useAtom } from 'jotai'
import { boardSize } from '../../state'

const BoardForm = () => {
  const [size, setSize] = useAtom(boardSize)
  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as keyof typeof heights)
  }

  return (
    <div className='FormWrapper'>
      <Typography style={{ marginRight: '10px' }}>Difficulty:</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={size}
        onChange={handleChange}
      >
        <MenuItem value={'easy'}>Easy</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'hard'}>Hard</MenuItem>
      </Select>
    </div>
  )
}
export default BoardForm
