import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Typography, Container } from '@mui/material'

import Loading from '../components/loading'

import { selectQuestions } from '../features.questions/questionsSlice'
import { Question } from '../types/questions.type'
import { useNavigate, useParams } from 'react-router-dom'

import Instructions from '../components/instructions'

const Test = () => {
  let { isLoading, questions } = useSelector(selectQuestions)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { testId } = useParams()
  const [slag, setSlag] = useState('')

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

  // partition questions
  const partition = (arr: Question[], size: number) => {
    const result = []
    let i = 0
    while (i < arr.length) {
      result.push(arr.slice(i, (i += size)))
    }
    return result
  }

  // divide questions into 5 questions per page
  const questionsPerPage = 5
  const totalPages = Math.ceil(questions.length / questionsPerPage)
  const [currentPage, setCurrentPage] = React.useState(1)
  const startIndex = (currentPage - 1) * questionsPerPage
  const endIndex = startIndex + questionsPerPage
  const currentQuestions = questions.slice(startIndex, endIndex)

  // navigate to results page
  const handleSubmit = () => {
    if (currentQuestions.every(withAnswers)) {
      navigate(`/test/results/${slag}`)
    } else {
      alert('Please answer all questions')
      navigate(`/test/results/${slag}`)
    }
  }
  const handleStart = () => {
    if (slag) {
      alert('Practice Test ' + slag + ' has started')
      // navigate(`/test/${testId}/results`)
    } else {
      alert('Please enter a select Practice Test before starting')
    }
  }

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/')
    }
  }, [navigate, questions])

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
      {/* Instractions */}
      <Instructions />

      {/* Practice test  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          maxWidth: '730px',
          flexWrap: 'wrap',
          mx: 'auto',
          my: '1.3rem',
          padding: '0.5rem',
          height: 'fit-content',
        }}
      >
        {partition(questions, 10).map((_, index) => (
          <Typography
            onClick={() => {
              slag === (index + 1).toString()
                ? setSlag('')
                : setSlag((index + 1).toString())
            }}
            key={index}
            sx={{
              fontSize: '1.1rem',
              fontWeight: '700',
              m: '0.5rem',
              cursor: 'pointer',
              backgroundColor:
                slag === (index + 1).toString() ? '#ffa40b' : '#f0f0f0',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            Practice Questions {index + 1}
          </Typography>
        ))}
      </Box>

      {/* Start Test */}
      <Button
        variant='contained'
        disabled={slag === ''}
        sx={{
          mx: 'auto',
          fontSize: '1.1rem',
          fontWeight: '700',
          maxWidth: '300px',
          my: '1rem',
          width: '100%',
          backgroundColor: '#ffa40b',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#ffa40b',
            color: '#fff',
          },
        }}
        onClick={handleStart}
      >
        Start Test &rarr;
      </Button>
    </Container>
  )
}

export default Test
