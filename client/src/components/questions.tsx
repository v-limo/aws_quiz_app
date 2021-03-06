import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Box, Button, Container, Typography } from '@mui/material'

import { selectQuestions } from '../features.questions/questionsSlice'
import background from '../img/background_3.jpg'
import Loading from './loading'
import Question from './question'

const Questions = () => {
  const { isLoading, questions: data } = useSelector(selectQuestions)
  const [showAnswers, setShowAnswers] = useState(false)

  let questions = data
    .filter((question) => question.question.length < 100)
    .slice(0, 5)

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
          height: '350px',
          width: '100%',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '730px',
          margin: '2rem',
          borderRadius: '0.5rem',
          padding: '1rem',
          justifyContent: 'space-evenly',
        }}
      ></Box>

      <Typography
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          textAlign: 'center',
          margin: '1rem',
        }}
      >
        Sample Questions ({questions.length})
      </Typography>

      {questions.length > 0 && (
        <Button
          variant='outlined'
          color='primary'
          sx={{
            color: '#000',
            backgroundColor: !showAnswers ? '#ffa40b' : '#fff',
            width: 'fit-content',
            textTransform: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '0.5rem',
          }}
          onClick={() => setShowAnswers((prev) => !prev)}
        >
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </Button>
      )}

      <Box>
        {questions && questions.length > 0 ? (
          questions.map((question, index) => (
            <Question
              question={question}
              index={index}
              key={question?._id + index}
              showAnswers={showAnswers}
            />
          ))
        ) : (
          <p style={{ display: 'flex', textAlign: 'center' }}>
            No questions, Reload this page or
            <a href='/add'>add a question</a>
            to get started!
          </p>
        )}
      </Box>
    </Container>
  )
}

export default Questions
