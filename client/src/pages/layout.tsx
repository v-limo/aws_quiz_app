import React from 'react'
import { Outlet } from 'react-router'

import { Box } from '@mui/material'

import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  )
}
export default Layout
