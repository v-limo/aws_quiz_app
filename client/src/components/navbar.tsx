import React from 'react'
import { useNavigate } from 'react-router'

import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const NavBar = () => {
  const navigate = useNavigate()

  const navItem = {
    mx: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    borderBottom: '1px  solid transparent',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      borderBottom: '1px solid #ffa40b',
      borderBottomColor: '#ffa40b',
      color: '#ffa40b',
    },
  }

  return (
    <AppBar
      elevation={0}
      sx={{ p: '2px', bgcolor: '#fdece4', color: 'black', width: '100vw' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          alignItems: 'center',
          mx: 'auto',
          width: '100%',
        }}
      >
        <Box sx={navItem} onClick={() => navigate('/')}>
          Home
        </Box>

        <Box sx={navItem} onClick={() => navigate('questions/test')}>
          Practice Questions
        </Box>
        <Box sx={navItem} onClick={() => navigate('questions/add')}>
          Add questions
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
