import { Card, Typography } from '@mui/material'

import { Question as QuestionType } from '../types/questions.type'

type Props = {
  question: QuestionType
  index: number
  showAnswers?: boolean
}

const Question = ({ question: mainQuestion, index, showAnswers }: Props) => {
  const { question, choices } = mainQuestion

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
        minHeight: '100%',
        flex: '1',
        margin: '1rem',
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

      {choices.map((choice, index) => (
        <Typography
          key={Math.random() * 100 + index}
          variant='body1'
          sx={{
            cursor: 'pointer',
            padding: '1rem',
            my: '0.1rem',
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease-in-out',
            bgcolor: choice?.correct && showAnswers ? '#ffa40b' : 'transparent',
            '&:hover': {
              backgroundColor: '#ffc86c',
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
