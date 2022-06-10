import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Container, Typography } from '@mui/material'

import Instructions from '../components/instructions'
import Loading from '../components/loading'
import { reSet, selectQuestions, setTestStage } from '../features.questions/questionsSlice'
import { Teststage } from '../types/questions.type'
import partition from '../utils/partition'

const TestPage = () => {
  let { isLoading, questions } = useSelector(selectQuestions)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [slag, setSlag] = useState('')

  const handleStart = () => {
    if (slag) {
      let started: Teststage = 'started'
      dispatch(setTestStage(started))
      dispatch(reSet())
      navigate(`/questions/testi/${slag}`)
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
        {partition(questions, 30).map((_, index) => (
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

export default TestPage
