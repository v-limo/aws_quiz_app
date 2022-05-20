import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box, Button, Container } from '@mui/material'

import { selectQuestions } from '../features.questions/questionsSlice'
import background from '../img/background_3.jpg'
import Loading from './loading'
import Question from './question'

const Questions = () => {
  const { isLoading, questions } = useSelector(selectQuestions)
  const [showAnswers, setShowAnswers] = useState(false)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '30vh',
          width: '100%',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100vw',
        }}
      ></Box>

      {questions.length > 0 && (
        <Button
          variant='contained'
          color='primary'
          sx={{
            width: 'fit-content',
            mx: 'auto',
            my: '1rem',
            borderRadius: '0.5rem',
          }}
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </Button>
      )}

      <Box
        sx={{
          width: {
            xs: '100%',
            md: '96%',
            lg: '86%',
          },
        }}
      >
        {questions.length > 0 && (
          <>
            {questions.map((question, index) => (
              <Question
                question={question}
                index={index}
                key={question?._id}
                showAnswers={showAnswers}
              />
            ))}
          </>
        )}

        {questions.length === 0 && (
          <p style={{ display: 'flex', textAlign: 'center' }}>
            No questions, Reload this page or add a question to get started!
          </p>
        )}
      </Box>
    </Container>
  )
}

export default Questions
