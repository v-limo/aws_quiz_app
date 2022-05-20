import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Container, Typography } from '@mui/material'

import Loading from '../components/loading'
// import Question from '../components/question'
import { selectQuestions } from '../features.questions/questionsSlice'

const Test = () => {
  const { isLoading } = useSelector(selectQuestions)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container
      sx={{
        maxWidth: '100vw',
        mx: 'auto',
        height: 'fit-content',
        minHeight: '100vh',
        display: 'flex',
        pt: '80px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          my: '1.3rem',
          maxWidth: '40vw',
          flex: '1',
          padding: '1rem',
          backgroundColor: '#ffa40b',
          borderRadius: '0.5rem',
          height: 'fit-content',
          justifyContent: 'space-evenly',
          minHeight: '100%',
        }}
      >
        <Typography variant='h5'>Coming Soon!</Typography>
      </Box>

      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: '1.3rem',
          maxWidth: '40vw',
          zIndex: '1',
          opacity: '0.1',
        }}
      >
        {questions.length > 0 && (
          <Box>
            {questions.map((question, index) => (
              <Question question={question} index={index} key={question?._id} />
            ))}
          </Box>
        )}
      </Box> */}
    </Container>
  )
}

export default Test
