import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Box, Button, Container, Typography } from '@mui/material'

import { selectQuestions, setTestStage } from '../features.questions/questionsSlice'
import { Question } from '../types/questions.type'
import partition from '../utils/partition'
import Loading from './loading'
import TestQuestion from './testQuestion'

const Test = () => {
  let { isLoading, questions } = useSelector(selectQuestions)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slag } = useParams()

  const withAnswers = (question: Question) => {
    const { chosenAnswers } = question
    if (!chosenAnswers) {
      return false
    }
    if (
      question.choices.filter((choices) => choices.correct)?.length ===
      chosenAnswers?.length
    ) {
      return true
    } else {
      return false
    }
  }

  // partition questions
  questions = partition(questions, 30)[Number(slag) - 1]

  // divide questions into 5 questions per page
  const questionsPerPage = 5
  const totalPages = Math.ceil(questions.length / questionsPerPage)
  const [currentPage, setCurrentPage] = React.useState(1)
  const startIndex = (currentPage - 1) * questionsPerPage
  const endIndex = startIndex + questionsPerPage
  const currentQuestions = questions.slice(startIndex, endIndex)

  // navigate to results page
  const handleSubmit = () => {
    if (questions.every(withAnswers)) {
      navigate(`/questions/test/results/${slag}`)
      dispatch(setTestStage('finished'))
    } else {
      alert('Please answer all questions')
    }
  }

  useEffect(() => {
    if (questions.length === 0 && !isLoading) {
      navigate(`/questions/testi/${slag}`)
    }
  }, [isLoading, navigate, questions, slag])

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
          top: '70px',
          width: 'fit-content',
          mx: 'auto',
          display: {
            sm: 'none',
            md: 'none',
            xl: 'flex',
            lg: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          overflow: 'ellipsis',
          borderBottom: '1px solid #e0e0e0',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: '#fff',
          zIndex: '1',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          height: 'fit-content',
        }}
      >
        {questions.map((question, index) => (
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: withAnswers(question) ? '#ffa40b' : '#fff',
              cursor: 'pointer',
              flexWrap: 'wrap',
              height: '30px',
              width: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              m: '1px',
            }}
            onClick={() => {
              // change page to question index
              let newPage = Math.ceil(index / questionsPerPage)
              if (
                newPage !== currentPage &&
                newPage <= totalPages &&
                newPage > 0
              ) {
                setCurrentPage(newPage)
              } else if (newPage > totalPages) {
                setCurrentPage(totalPages)
              } else if (newPage < 1) {
                setCurrentPage(1)
              }
            }}
            variant='body1'
            key={question._id + index}
          >
            <a
              style={{
                color: '#000',
                textDecoration: 'none',
                textTransform: 'none',
              }}
              href={`#question-${index + 1}`}
            >
              {index + 1}
            </a>
          </Typography>
        ))}
      </Box>

      {currentQuestions.length > 0 && (
        <Box>
          {currentQuestions?.map((question, index) => (
            <TestQuestion
              question={question}
              index={
                currentPage === 1
                  ? index + 1
                  : index + 1 + (currentPage - 1) * questionsPerPage
              }
              key={question?._id + index}
            />
          ))}
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '730px',
          mx: 'auto',
          my: '1.3rem',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          height: 'fit-content',
        }}
      >
        <Button
          variant='contained'
          disabled={currentPage === 1}
          sx={{
            backgroundColor: '#ffa40b',
            // display: currentPage === 1 ? 'none' : 'flex',
            color: '#fff',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            px: '1,2rem',
            textDecoration: 'none',
            textTransform: 'none',
            justifySelf: 'flex-start',
            ml: '1rem',
            hover: {
              backgroundColor: '#ffa40b',
            },
          }}
          onClick={() =>
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          &larr; Pre
        </Button>
        <Button
          variant='contained'
          disabled={currentPage === totalPages}
          sx={{
            backgroundColor: '#ffa40b',
            color: '#fff',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            px: '1,2rem',
            // display: currentPage === totalPages ? 'none' : 'flex',
            textDecoration: 'none',
            textTransform: 'none',
            justifySelf: 'flex-end',
            alignItems: 'center',
            mr: '1rem',
            hover: {
              backgroundColor: '#ffa40b',
            },
          }}
          onClick={() =>
            setCurrentPage(
              currentPage < totalPages ? currentPage + 1 : currentPage
            )
          }
        >
          Next &rarr;
        </Button>
      </Box>

      {currentPage === totalPages && (
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
      )}
    </Container>
  )
}

export default Test
