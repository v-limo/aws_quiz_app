import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Box, Card, Container, Typography } from '@mui/material'

import Loading from '../components/loading'
import ResultQuestion from '../components/resultQuestion'
import { selectQuestions } from '../features.questions/questionsSlice'
import partition from '../utils/partition'

const TestResults = () => {
  let { isLoading, questions } = useSelector(selectQuestions)

  const { slag } = useParams()

  questions = partition(questions, 30)[Number(slag) - 1]

  const totalPossible = questions.reduce((acc, question) => {
    return acc + question.choices.filter((choice) => choice.correct).length
  }, 0)
  const totalCorrect = questions.reduce((acc, question) => {
    return (
      acc +
      question.choices.filter(
        (choice) =>
          choice.correct && question.chosenAnswers.includes(choice.choice)
      ).length
    )
  }, 0)
  const score = (totalCorrect / totalPossible) * 100

  let scoreColor = '#00ff00'

  if (score > 75) {
    scoreColor = '#00ff00'
  }

  if (score < 50) {
    scoreColor = '#ff0000'
  }

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
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '730px',
          my: '1.3rem',
          mx: 'auto',
          padding: '1.5rem',
          height: 'fit-content',
          backgroundColor: scoreColor === '#00ff00' ? '#8ec292' : '#bf8d8d',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
            color: scoreColor,
            textAlign: 'center',
            textTransform: 'uppercase',
            textDecoration: 'underline',
          }}
        >
          Score Card
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: scoreColor,
            textAlign: 'center',
            m: '1rem',
            fontSize: '1.2rem',
          }}
        >
          Practice Questions {slag}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 'bold',
            color: scoreColor,
            textAlign: 'center',
            alignSelf: 'flex-start',
            flexGrow: '1',
            textTransform: 'uppercase',
          }}
        >
          Score: {score.toFixed(2)}%
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}
        >
          1. Technology Score : {score.toFixed(2)}%
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}
        >
          2. Billing and pricing : {score.toFixed(2)}%
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}
        >
          3. Security and Compliance : {score.toFixed(2)}%
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'flex-start',
          }}
        >
          4. Cloud Concepts : {score.toFixed(2)}%
        </Typography>
      </Card>
      <Box>
        {questions.length > 0 && (
          <Box>
            {questions?.map((question, index) => (
              <ResultQuestion
                question={question}
                index={index}
                key={question?._id + index}
              />
            ))}
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default TestResults
