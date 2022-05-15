import { Box, Typography } from '@mui/material'

import { Question as QuestionType } from '../types/questions.type'

type Props = {
  question: QuestionType
}

const Question = ({ question }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: '1.3rem',
        mx: 'auto',
        height: 'fit-content',
        justifyContent: 'space-around',
      }}
    >
      <Typography variant='body1'>{question.question}</Typography>
    </Box>
  )
}
export default Question
