import { Alert, Collapse, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useAtom } from 'jotai'
import { showDeleteBanner } from '../../state'

export const MessageAlert = () => {
  const [show, setShow] = useAtom(showDeleteBanner)

  return (
    <Collapse in={show}>
    <Alert
      severity={'success'}
      action={<IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setShow(false)
        } }
      >
        <Close />
      </IconButton>}
      sx={{ mb: 2 }}
    >
      Level deleted succesfully!
    </Alert>
    </Collapse>
  )
}
