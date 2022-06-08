import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Button, Typography, Container } from '@mui/material'

import Loading from '../components/loading'
import TestQuestion from '../components/testQuestion'
import { selectQuestions } from '../features.questions/questionsSlice'
import { Question } from '../types/questions.type'

const Test = () => {
  let { isLoading, questions } = useSelector(selectQuestions)

  const withAnswers = (question: Question) => {
    const { chosenAnswers } = question
    if (!chosenAnswers) {
      return false
    }
    if (
      question.choices.filter((choices) => choices.correct).length ===
      chosenAnswers.length
    ) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = () => {
    console.log('submit')
  }

  questions = questions.slice(0, 10)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: '80px',
        maxWidth: '100vw',
        mx: 'auto',
        height: 'fit-content',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '80px',
          width: 'fit-content',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: '100%',
        }}
      >
        {questions.map((question, index) => (
          <Typography
            sx={{
              backgroundColor: withAnswers(question) ? '#ffa40b' : 'green',
              flexWrap: 'wrap',
              height: '30px',
              width: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              m: '1px',
              cursor: 'pointer',
              textDecoration: 'none',
              textTransform: 'none',
            }}
            variant='body1'
            key={question._id + index}
          >
            <a href={`#question-${index + 1}`}>{index + 1}</a>
          </Typography>
        ))}
      </Box>

      {questions.length > 0 && (
        <Box>
          {questions?.map((question, index) => (
            <TestQuestion
              question={question}
              index={index}
              key={question?._id + index}
            />
          ))}
        </Box>
      )}
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#ffa40b',
          color: '#fff',
          fontSize: '1.2rem',
          textTransform: 'none',
          fontWeight: '700',
          m: '1rem',
          px: '1.3rem',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#ffa40b',
          },
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}

export default Test
