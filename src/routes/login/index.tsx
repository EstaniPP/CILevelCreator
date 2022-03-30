// eslint-disable-next-line no-use-before-define
import React from 'react'
import Card from '@mui/material/Card'
import { useAuth } from '../../utils/hooks/useAuth'
import TextField from '@mui/material/TextField'
import './login.css'
import { Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'

function Creator () {
  const { user, signin } = useAuth()
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const navigate = useNavigate()
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const success = await signin(email, password)
    if (success) navigate('/CILevelCreator/create')
  }
  return (
    <>
      {user &&
        <Navigate to='/CILevelCreator/create'/>
      }
      <Card className='Card'>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <TextField
            className='TextField'
            onChange={handleEmailChange}
            value={email}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            className='TextField'
            onChange={handlePasswordChange}
            value={password}
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Button
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Card>
    </>
  )
}

export default Creator
