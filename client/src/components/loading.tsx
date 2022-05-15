import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '70vh',
      }}
    >
      <CircularProgress color='primary' />
      <Typography>Loading for Questions .....</Typography>
    </Box>
  )
}

export default Loading
