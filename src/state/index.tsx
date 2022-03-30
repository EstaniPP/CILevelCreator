import { AlertColor } from '@mui/material'
import { atom } from 'jotai'
import { heights } from '../routes/levelCreator'

// Create your atoms and derivatives
const showSucessBanner = atom(false)
const successBannerMsj = atom<AlertColor>('success')
const boardSize = atom<keyof typeof heights>('medium')

export { showSucessBanner, successBannerMsj, boardSize }
