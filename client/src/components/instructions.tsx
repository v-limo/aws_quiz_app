import { Box, Divider, Typography } from '@mui/material'

import data from '../utils/instructions'

export const Instructions = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', maxWidth: '730px', mx: 'auto' }}>
        <Divider
          sx={{
            width: '40%',
            my: '0.2rem',
            mx: 'auto',
            borderColor: '#ffa40b',
            color: 'yellow',
          }}
        />
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: '700',
            my: '1rem',
            color: '#000',
            textAlign: 'center',
          }}
        >
          Practice test Instructions, Please read carefully.
        </Typography>

        <Divider
          sx={{
            width: '40%',
            my: '0.2rem',
            mx: 'auto',
            borderColor: '#ffa40b',
            color: 'yellow',
          }}
        />
        {data.map((instruction, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#525252',
            }}
            key={instruction}
          >
            <Typography
              component='p'
              sx={{
                fontSize: '1rem',
                fontWeight: '700',
                mx: '0.5rem',
              }}
            >{`${index + 1}.  `}</Typography>
            <Typography
              sx={{
                fontSize: '1.2rem',
                flexGrow: '1',
                mx: '0.5rem',
              }}
            >
              {instruction}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default Instructions
