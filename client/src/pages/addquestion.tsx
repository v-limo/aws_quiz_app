import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import { createQ } from '../features.questions/questions.sync'
import { selectQuestions } from '../features.questions/questionsSlice'
import { Choice, CreateQuestion } from '../types/questions.type'

const AddQuestion = () => {
  const dispatch = useDispatch()
  const { message } = useSelector(selectQuestions)

  const [question, setQuestion] = useState<CreateQuestion['question']>('')
  const [choice1, setChoice1] = useState<Choice>({ choice: '' })
  const [choice2, setChoice2] = useState<Choice>({ choice: '' })
  const [choice3, setChoice3] = useState<Choice>({ choice: '' })
  const [choice4, setChoice4] = useState<Choice>({ choice: '' })
  const [choice5, setChoice5] = useState<Choice>({ choice: '' })

  const [source, setSource] = useState('')

  const choices = [choice1, choice2, choice3, choice4, choice5]
  const handleAddQuestion = () => {
    const newQuestion: CreateQuestion = {
      question: question.trim(),
      choices: choices
        ?.map((choice) => {
          return {
            choice: choice.choice.trim(),
            correct: choice.correct,
          }
        })
        ?.filter((choice) => choice.choice.trim() !== ''),
    }

    if (source.trim() !== '') {
      newQuestion.source = source.trim()
    }

    dispatch(createQ(newQuestion))
  }

  // ResetForm
  useEffect(() => {
    if (message === 'Request completed') {
      setQuestion('')
      setChoice1({ choice: '', correct: false })
      setChoice2({ choice: '', correct: false })
      setChoice3({ choice: '', correct: false })
      setChoice4({ choice: '', correct: false })
      setChoice5({ choice: '', correct: false })
    }
  }, [message])

  const textFieldStyle = {
    my: '1rem',
    borderRadius: '0.5rem',
    width: '10',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '0.5rem',
    maxWidth: '100vw',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        pt: '90px',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          p: '1rem',
          maxWidth: '730px',
          mx: 'auto',
          padding: '0.5rem',
          borderRadius: '0.5rem',
          height: 'fit-content',
          justifyContent: 'space-around',
          minHeight: '100%',
          flex: '1',
        }}
      >
        <Typography variant='h4'>1/2 Add Question</Typography>
        <FormControl
          sx={{
            width: '100%',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FormLabel
            sx={{
              alignSelf: 'flex-start',
              my: '2px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            1.1 Question *
          </FormLabel>
          <TextField
            fullWidth
            placeholder='Enter Question'
            id='text'
            type='text'
            sx={textFieldStyle}
            value={question}
            onChange={(e: {
              target: { value: React.SetStateAction<string> }
            }) => setQuestion(e.target.value)}
          />
          {/* Choices */}
          <FormLabel
            sx={{
              alignSelf: 'flex-start',
              my: '2px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            1.2 Unique Choices *
          </FormLabel>
          <TextField
            placeholder='Enter Choice 1'
            sx={textFieldStyle}
            fullWidth
            type='text'
            value={choice1.choice}
            onChange={(e) => setChoice1({ ...choice1, choice: e.target.value })}
          />
          <TextField
            placeholder='Enter Choice 2'
            sx={textFieldStyle}
            fullWidth
            type='text'
            value={choice2.choice}
            onChange={(e) => setChoice2({ ...choice2, choice: e.target.value })}
          />

          <TextField
            placeholder='Enter Choice 3'
            sx={textFieldStyle}
            fullWidth
            type='text'
            value={choice3.choice}
            onChange={(e) => setChoice3({ ...choice3, choice: e.target.value })}
          />

          <TextField
            placeholder='Enter Choice 4'
            sx={textFieldStyle}
            fullWidth
            type='text'
            value={choice4.choice}
            onChange={(e) => setChoice4({ ...choice4, choice: e.target.value })}
          />

          <TextField
            placeholder='Enter Choice 5 - Optional'
            sx={textFieldStyle}
            fullWidth
            type='text'
            value={choice5.choice}
            onChange={(e) => setChoice5({ ...choice5, choice: e.target.value })}
          />

          <FormLabel
            sx={{
              alignSelf: 'flex-start',
              my: '2px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            1.3. Optionals
          </FormLabel>
          <FormLabel
            sx={{
              alignSelf: 'flex-start',
              my: '2px',
              fontSize: '1rem',
              fontWeight: 'bold',
              ml: '1rem',
            }}
          >
            1.3.1 Source
          </FormLabel>

          <TextField
            sx={textFieldStyle}
            fullWidth
            type='text'
            placeholder='Optional - Source'
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </FormControl>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0.5rem',
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '730px',
          mx: 'auto',
          p: '1rem',
        }}
      >
        <Typography variant='h5' sx={{ alignSelf: 'center', padding: '1rem' }}>
          2/2 Preview and choose answers
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            width: '100%',
          }}
        >{` ${question}`}</Typography>

        {choices
          ?.filter((choice: Choice) => choice.choice.length > 0)
          ?.map((choice, index) => (
            <Typography
              key={choice.choice + index.toString()}
              onClick={() => {
                if (index === 0)
                  setChoice1({ ...choice1, correct: !choice1?.correct })
                if (index === 1)
                  setChoice2({ ...choice2, correct: !choice2?.correct })
                if (index === 2)
                  setChoice3({ ...choice3, correct: !choice3?.correct })
                if (index === 3)
                  setChoice4({ ...choice4, correct: !choice4?.correct })

                if (index === 4)
                  setChoice5({ ...choice5, correct: !choice5?.correct })
                else return
              }}
              variant='body1'
              sx={{
                cursor: 'pointer',
                padding: '1rem',
                width: '100%',
                mx: 'auto',
                my: '0.3rem',
                pl: '2rem',
                borderRadius: '0.5rem',
                bgcolor: choice?.correct ? '#ffa40b' : '#f0f0f0',
              }}
            >
              {`${['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)'][index]}.
           ${choice.choice}`}
            </Typography>
          ))}

        <Button
          variant='contained'
          color='primary'
          disabled={
            !question ||
            !choice1.choice ||
            !choice2.choice ||
            !choice3.choice ||
            !choice4.choice ||
            choices?.filter((choice: Choice) => choice?.correct).length < 1
          }
          sx={{
            mt: '1rem',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.5rem',
            height: 'fit-content',
            borderRadius: '0.5rem',
            width: {
              sm: '100%',
              md: '50%',
              lg: '30%',
            },
          }}
          onClick={handleAddQuestion}
        >
          Add Question
        </Button>
      </Box>
    </Box>
  )
}

export default AddQuestion
