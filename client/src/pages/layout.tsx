import React from 'react'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'

const Layout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}
export default Layout
