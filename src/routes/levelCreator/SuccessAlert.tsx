import { Alert, Collapse, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useAtom } from 'jotai'
import { showSucessBanner, successBannerMsj } from '../../state'

export const SuccessAlert = () => {
  const [success] = useAtom(successBannerMsj)
  const [show, setShow] = useAtom(showSucessBanner)

  return (
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
        <Close />
      </IconButton>}
      sx={{ mb: 2 }}
    >
      {success === 'success' ? 'Level created succesfully!' : 'Level already exists, please create a new one.'}
    </Alert>
    </Collapse>
  )
}
