// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useAuth } from '../../utils/hooks/useAuth'
import logo from '../../images/Logo.svg'
import './navBar.css'
import { IconButton } from '@mui/material'

export function NavBar () {
  const { user, signout } = useAuth()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <nav>
      <img className='imgLogo' src={logo} alt="PipPop! logo"/>
      {user &&
        <>
          <ul className='ul desktopNavBar'>
            <Link to="create"><li className='nav'>Create</li></Link>
            <Link to="manage"><li className='nav'>Manage</li></Link>
            <li className='nav' onClick={signout} >Logout</li>
          </ul>
          <div className='mobileNavBar'>
          <IconButton
            onClick={handleClick}
            aria-label="menu"
          >
            <MenuIcon style={{ color: 'white', height: '40px', width: '40px' }}/>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            onClick={handleClose}
          >
            <MenuItem><Link to="create"><li className='nav'>Create</li></Link></MenuItem>
            <MenuItem><Link to="manage"><li className='nav'>Manage</li></Link></MenuItem>
            <MenuItem onClick={signout}><li className='nav'>Signout</li></MenuItem>
          </Menu>
        </div>
      </>
      }
    </nav>
  )
}
