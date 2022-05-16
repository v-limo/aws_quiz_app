import { Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffa500',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100vw',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Hurricane',
          fontSize: 38,
          fontWeight: 700,
          textAlign: 'center',
          margin: '0 auto',
          cursor: 'pointer',
          mb: '0.5rem',
          padding: '0.5rem',
        }}
        variant='h4'
        color='primary'
        onClick={() => navigate('/')}
      >
        AWS Exam Quizlet
      </Typography>
    </Box>
  )
}

export default NavBar
