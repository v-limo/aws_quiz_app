import { Box, Typography } from '@mui/material'

import { Question as QuestionType } from '../types/questions.type'

type Props = {
  question: QuestionType
  index: number
  showAnswers?: boolean
}

const Question = ({ question: mainQuestion, index, showAnswers }: Props) => {
  const { question, choices } = mainQuestion

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '730px',
        my: '1.3rem',
        // mx: 'auto',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        height: 'fit-content',
        justifyContent: 'space-evenly',
        minHeight: '100%',
        flex: '1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          py: '1rem',
        }}
      >
        <Typography
          component='p'
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
            mr: '1rem',
          }}
        >{`${index + 1}.`}</Typography>
        <Typography
          component='p'
          sx={{
            fontSize: '1.1rem',
            fontWeight: '700',
          }}
        >
          {question}
        </Typography>
      </Box>

      {choices.length > 0 &&
        choices?.map((choice, index) => (
          <Typography
            key={choice.choice + index}
            variant='body1'
            sx={{
              cursor: 'pointer',
              padding: '1rem',
              my: '0.3rem',
              pl: '2rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease-in-out',
              bgcolor: choice?.correct && showAnswers ? '#ffa40b' : '#cccc',
              '&:hover': {
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            {`${['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)'][index]}.
           ${choice.choice}`}
          </Typography>
        ))}
    </Box>
  )
}
export default Question
