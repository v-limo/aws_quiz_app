import { useSelector } from 'react-redux'

import { Box, Container } from '@mui/material'

import { selectQuestions } from '../features.questions/questionsSlice'
import background from '../img/background_3.jpg'
import Loading from './loading'
import Question from './question'

const Questions = () => {
  const { isLoading, questions } = useSelector(selectQuestions)

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
                key={question?._id ?? Math.random() * 100 + index}
              />
            ))}
          </>
        )}

        {questions.length === 0 && (
          <p style={{ display: 'flex', textAlign: 'center' }}>
            No questions, Reload this page
          </p>
        )}
      </Box>
    </Container>
  )
}

export default Questions
