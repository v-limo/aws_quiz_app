import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setChosenAnswer } from '../features.questions/questionsSlice'

import { Question as QuestionType, Choice } from '../types/questions.type'

type Props = {
  question: QuestionType
  index: number
}

const ResultQuestion = ({ question: mainQuestion, index }: Props) => {
  const { question, choices, _id: questionId, chosenAnswers } = mainQuestion
  const dispatch = useDispatch()

  const checked = (choice: Choice) => {
    // correct and chosen green
    if (choice.correct && chosenAnswers?.includes(choice.choice)) {
      return '#00ff00'
    }
    //  correct and not chosen blue
    if (choice.correct && !chosenAnswers?.includes(choice.choice)) {
      return '#8ec292'
    }
    //  wrong and chosen red
    if (!choice.correct && chosenAnswers?.includes(choice.choice)) {
      return '#ff0000'
    } else {
      return '#bf8d8d'
    }
  }

  let possibleAnswers = choices.filter((choice) => choice.correct).length
  let correctAnswers = choices.filter(
    (choice) => choice.correct && chosenAnswers?.includes(choice.choice)
  ).length

  let score = (correctAnswers / possibleAnswers) * 100
  let scoreString = `${correctAnswers}/${possibleAnswers}`
  let scoreColor = '#00ff00'

  if (score < 100) {
    scoreColor = '#00ff00'
  }
  if (score < 90) {
    scoreColor = '#00ff00'
  }

  if (score < 80) {
    scoreColor = '#8ec292'
  }
  if (score < 70) {
    scoreColor = '#bf8d8d'
  }

  if (score < 50) {
    scoreColor = '#ff0000'
  }

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
        borderRadius: '0.5rem',
        boarderWidth: '1px',
        borderColor: scoreColor,
        borderStyle: scoreColor === '#00ff00' ? 'solid' : 'dashed',
        backgroundColor: '#fff',
        boarderRadius: '0.5rem',
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
            fontSize: '1.2rem',
            fontWeight: '700',
            mx: '0.5rem',
          }}
          id={`question-${index + 1}`}
        >{`${index + 1}.  `}</Typography>
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
            flexGrow: '1',
          }}
        >
          {question}
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: '700',
            backgroundColor: scoreColor,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.3rem',
            flexGrow: '0',
            height: 'fit-content',
            alignSelf: 'flex-end',
            borderRadius: '0.6rem',
          }}
        >
          {scoreString}
        </Typography>
      </Box>

      {choices.length > 0 &&
        choices?.map((choice, index) => (
          <Typography
            key={choice.choice + index}
            sx={{
              pl: '1.1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease-in-out',
              color: checked(choice),
              fontWeight: '700',
              fontSize: '1rem',
            }}
          >
            {`${['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)'][index]}.
            ${
              chosenAnswers?.includes(choice.choice) && choice.correct
                ? `✅ ${choice.choice}`
                : chosenAnswers?.includes(choice.choice) && !choice.correct
                ? `❌ ${choice.choice}`
                : ` ${choice.choice}`
            } `}
          </Typography>
        ))}
    </Box>
  )
}
export default ResultQuestion
