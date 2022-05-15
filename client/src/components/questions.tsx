import { useSelector } from 'react-redux'

import { Box } from '@mui/material'

import { selectQuestions } from '../features.questions/questionsSlice'
import Loading from './loading'
import Question from './question'
import { questions as data } from '../assets/questions'

import background from '../img/background_3.jpg'

const Questions = () => {
  const { isLoading, questions } = useSelector(selectQuestions)

  console.log(data)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Box
      sx={{
        display: 'flex',
        my: '1.3rem',
        mx: 'auto',
        height: 'fit-content',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          width: '100vw',
          height: '20vh',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 1,
          zIndex: -1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          color: '#ffffff',
        }}
        minWidth='sm'
      ></Box>
      {questions.length > 0 ? (
        <>
          {questions.map((question) => (
            <Question question={question} key={Math.random()} />
          ))}
        </>
      ) : (
        <>
          {data.map((question) => (
            <Question question={question} key={Math.random()} />
          ))}
          )
        </>
      )}
    </Box>
  )
}

export default Questions
