import React from 'react'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'

import NavBar from '../components/navbar'

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  )
}
export default Layout
