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
        backgroundColor: '#fdece4',
      }}
    >
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          backgroundColor: '#ffb400',
          margin: '0px',
        }}
      />
      <Typography variant='body1' gutterBottom>
        Vincent Limo &copy;2019 - {new Date().getFullYear()}
      </Typography>

      <Typography variant='body1'>
        <a href='https://github.com/v-limo?tab=repositories'>GitHub</a>
      </Typography>
    </Box>
  )
}

export default Footer
