import { Alert, Collapse, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useAtom } from 'jotai'
import { showLoginBanner, errorLoginMessage } from '../../state'

export const LoginAlert = () => {
  const [show, setShow] = useAtom(showLoginBanner)
  const [error] = useAtom(errorLoginMessage)

  return (
    <Collapse in={show}>
    <Alert
      severity={'error'}
      action={<IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setShow(false)
        }}
      >
        <Close />
      </IconButton>}
      sx={{ mb: 2 }}
    >
      {
        error === 'auth/invalid-email' || error === 'auth/invalid-password' ? 'Invalid email or password.' : 'An unexpected error has occured.'
      }
    </Alert>
    </Collapse>
  )
}
