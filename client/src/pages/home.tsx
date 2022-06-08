import React from 'react'

import { Box } from '@mui/material'

import Questions from '../components/questions'

const Home = () => (
  <Box
    sx={{
      maxWidth: '100vw',
      mx: 'auto',
      pt: '80px',
      height: 'fit-content',
      minHeight: '100vh',
      fontFamily: 'Helvetica Neue Arial sans-serif',
    }}
  >
    <Questions />
  </Box>
)

export default Home
