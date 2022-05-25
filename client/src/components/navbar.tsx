import React from 'react'
import { useNavigate } from 'react-router'

import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const NavBar = () => {
  const navigate = useNavigate()

  const navItem = {
    mx: {
      sm: 'auto',
      md: 3,
      lg: 3,
    },
    px: 1,
    cursor: 'pointer',
    fontSize: '1.3rem',
    borderBottom: '1px  solid transparent',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderBottom: '1px solid #ffa40b',
      borderBottomColor: '#ffa40b',
    },
  }

  return (
    <AppBar
      elevation={0}
      sx={{ p: '4px', bgcolor: '#fdece4', color: 'black', width: '100vw' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          alignItems: 'center',
          p: 2,
          mx: 'auto',
          width: '100%',
        }}
      >
        <Box sx={navItem} onClick={() => navigate('/')}>
          Home
        </Box>
        <Box sx={navItem} onClick={() => navigate('/add')}>
          Add Question
        </Box>
        <Box sx={navItem} onClick={() => navigate('/test')}>
          Test
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
