import React from 'react'

import { Box, Divider, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        mx: 'auto',
        display: 'flex',
        height: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Divider
        sx={{
          width: '50%',
          mx: 'auto',
          height: '1px',
          backgroundColor: '#ffb400',
          margin: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '0.5rem',
        }}
      />
      <Typography variant='body1' gutterBottom>
        Vincent Limo &copy;2019 - {new Date().getFullYear()} All rights
        reserved.{' '}
        <a href='https://github.com/v-limo?tab=repositories'>GitHub</a>
      </Typography>
    </Box>
  )
}

export default Footer
