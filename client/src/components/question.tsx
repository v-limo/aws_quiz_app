import { useDispatch, useSelector } from 'react-redux'

import { Box, Button, Card, Typography } from '@mui/material'

import { createQ } from '../features.questions/questions.sync'
import { CreateQuestion, Question as QuestionType } from '../types/questions.type'

type Props = {
  question: QuestionType
  index: number
}

const Question = ({ question: mainQuestion, index }: Props) => {
  const dispatch = useDispatch()

  const { question, choices } = mainQuestion

  let choicesArray = [...choices].sort(
    () => Math.random() - 0.5
  ) as CreateQuestion['choices']

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: '1.3rem',
        mx: 'auto',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '0.5rem',
        maxWidth: '100vw',
        height: 'fit-content',
        justifyContent: 'space-evenly',
      }}
    >
      <Typography
        variant='body1'
        sx={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          padding: '0.5rem',
        }}
      >{`${index + 1}. ${question}`}</Typography>

      {choicesArray.map((choice, index) => (
        <Typography
          key={Math.random() * 100 + index}
          variant='body1'
          sx={{
            cursor: 'pointer',
            padding: '1rem',
            my: '0.1rem',
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease-in-out',
            bgcolor: choice?.correct ? '#ffa40b' : '',
            '&:hover': {
              bgcolor: '#ffa40b',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        >
          {`${['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)'][index]}.
           ${choice.choice}`}
        </Typography>
      ))}
    </Card>
  )
}
export default Question
