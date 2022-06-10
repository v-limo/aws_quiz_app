import { useDispatch } from 'react-redux'

import { Box, Typography } from '@mui/material'

import { setChosenAnswer } from '../features.questions/questionsSlice'
import { Question as QuestionType, SetChosenAnswer } from '../types/questions.type'

type Props = {
  question: QuestionType
  index: number
}

const TestQuestion = ({ question: mainQuestion, index }: Props) => {
  const { question, choices, _id: questionId, chosenAnswers } = mainQuestion
  const dispatch = useDispatch()

  const setChosen = (choice: string) => {
    const chosen: SetChosenAnswer = {
      questionId,
      choice,
    }
    dispatch(setChosenAnswer(chosen))
  }

  const chosen = (choice: string) => chosenAnswers?.includes(choice)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '730px',
        my: '1.3rem',
        mx: 'auto',
        padding: '0.5rem',
        height: 'fit-content',
        justifyContent: 'space-evenly',
        minHeight: '100%',
        flex: '1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          py: '1rem',
        }}
      >
        <Typography
          component='p'
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
            mx: '0.5rem',
          }}
          id={`question-${index + 1}`}
        >{`${index}.  `}</Typography>
        <Typography
          component='p'
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
            flexGrow: '1',
          }}
        >
          {question}
        </Typography>
      </Box>

      {choices.length > 0 &&
        choices?.map((choice, index) => (
          <Typography
            onClick={() => setChosen(choice.choice)}
            key={choice.choice + index}
            variant='body1'
            sx={{
              cursor: 'pointer',
              padding: '1rem',
              my: '0.3rem',
              pl: '1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: chosen(choice.choice) ? '#ffa40b' : '#f0f0f0',
            }}
          >
            {`${['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)'][index]}.
           ${choice.choice}`}
          </Typography>
        ))}
    </Box>
  )
}
export default TestQuestion
