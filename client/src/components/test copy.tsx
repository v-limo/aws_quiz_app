import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Typography, Container } from '@mui/material'

import Loading from './loading'
import TestQuestion from './testQuestion'
import { selectQuestions } from '../features.questions/questionsSlice'
import { Question } from '../types/questions.type'
import { useNavigate, useParams } from 'react-router-dom'

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

  const Instructions = [
    'Select the correct answer or answers for each question.',
    'Click the "Next" button to continue to the next question group.',
    'Click the "Prev" button to go back to the previous question group.',
    'There are a total of 30 randomly selected questions in this test.',
    'You MUST asnwer all questions before you can submit your answers.',
    "When you're done, click the 'Submit' button to see your results.",
    "The results will be displayed in the results page after you click the 'Submit' button.",
    'At the moment, the results are not saved, so make you screenshot, print or save your answers before you leave the page.',
    "All questions are based AWS's Cloud Practitioner's Guide.",
    "The Questions  MAY not be 100% accurate, does not align to certification  domain ratio  but it's a good start to get used to the AWS Cloud Practitioner's Exam.",
    'If you have any questions, please contact us at vinceleemo@gmail.com or via the contact page',
    'Thank you for taking this practice exam, we hope it was/is helpful to your exam preparations.',
    "if you are ready to take the exam, please select the 'Practice question set' above and click 'Start Test'",
  ]

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
      navigate(`/test/${testId}/results`)
    } else {
      // alert('Please answer all questions')
      navigate(`/test/results/${slag}`)
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
            onClick={() => setSlag((index + 1).toString())}
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

      {/* Instractions */}

      <Box sx={{ width: '100%', maxWidth: '730px', mx: 'auto' }}>
        <Typography
          sx={{
            fontSize: '1.3rem',
            fontWeight: '700',
            textAlign: 'center',
            my: '1rem',
          }}
        >
          Questions Instructions, Please read carefully before taking the test.
        </Typography>
        {Instructions.map((instruction, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              color: '#525252',
            }}
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

        {/* Start Test */}
        <Button
          variant='contained'
          sx={{
            mx: 'auto',
            fontSize: '1.1rem',
            fontWeight: '700',

            my: '1rem',
            width: '100%',
            backgroundColor: '#ffa40b',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#ffa40b',
              color: '#fff',
            },
          }}
          onClick={() => handleSubmit()}
        >
          Start Test &rarr;
        </Button>
      </Box>
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
