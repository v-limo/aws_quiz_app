import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { Question, SetChosenAnswer, Teststage } from '../types/questions.type'
import { createQ, fetchQ, fetchQById, removeQ, updateQ } from './questions.sync'

type questionsState = {
  questions: Question[]
  isLoading: boolean
  error: boolean
  message: string
  testStage: Teststage
}

const initialState = {
  questions: [],
  isLoading: false,
  error: false,
  message: '',
  testStage: 'idle',
} as questionsState

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setChosenAnswer: (state, action: { payload: SetChosenAnswer }) => {
      const { questionId, choice } = action.payload
      const question = state.questions.find((q) => q._id === questionId)
      if (!question) {
        return
      }

      let answerNo = question?.choices.filter((c) => c.correct).length
      let correctNo = question?.choices.filter((c) => c.correct).length

      // only one answer can be correct
      if (correctNo === 1) {
        state.questions = state.questions.map((question) => {
          if (question._id === questionId) {
            //remove if already exists
            question.chosenAnswers.includes(choice)
              ? (question.chosenAnswers = [])
              : (question.chosenAnswers = [choice])
          }
          return question
        })
      } else {
        // multiple answers can be correct
        state.questions = state.questions.map((question) => {
          if (question._id === questionId) {
            // if the answer is already chosen, remove it
            question.chosenAnswers.includes(choice)
              ? question.chosenAnswers.splice(
                  question.chosenAnswers.indexOf(choice),
                  1
                )
              : // but not more than the number of correct answers
              answerNo && question.chosenAnswers.length === answerNo
              ? console.log('not more than the number of correct answers')
              : // add the answer
                question.chosenAnswers.push(choice)
          }
          return question
        })
      }
    },

    submitTest: (state) => {
      state.questions = state.questions.map((question) => {
        question.chosenAnswers = []
        return question
      })
    },

    setTestStage: (state, action: { payload: Teststage }) => {
      state.testStage = action.payload
    },

    reSet: (state) => {
      state.questions = state.questions.map((question) => {
        question.chosenAnswers = []
        return question
      })
    },
  },

  extraReducers: (builder) => {
    // Fetch all questions
    builder.addCase(fetchQ.fulfilled, (state, action) => {
      state.questions = action.payload
      state.questions.forEach((question) => {
        question.chosenAnswers = []
      })
    })

    // Fetch a question by id
    builder.addCase(fetchQById.fulfilled, (state, action) => {
      state.questions = [...state.questions, action.payload]
    })

    // Create a question
    builder.addCase(createQ.fulfilled, (state, action) => {
      state.questions = [...state.questions, action.payload]
    })

    // Update a question
    builder.addCase(updateQ.fulfilled, (state, action) => {
      state.questions = state.questions.map((question) =>
        question._id === action.payload._id ? action.payload : question
      )
    })

    // Remove a question
    builder.addCase(removeQ.fulfilled, (state, action) => {
      state.questions = state.questions?.filter(
        (question) => question._id !== action.payload._id
      )
    })

    // Matchers
    builder.addMatcher(
      isAnyOf(
        fetchQ.pending,
        fetchQById.pending,
        createQ.pending,
        updateQ.pending,
        removeQ.pending
      ),
      (state) => {
        loading(state)
      }
    )

    builder.addMatcher(
      isAnyOf(
        fetchQ.fulfilled,
        fetchQById.fulfilled,
        createQ.fulfilled,
        updateQ.fulfilled,
        removeQ.fulfilled
      ),
      (state) => {
        state.isLoading = false
        state.error = false
        state.message = 'Request completed'
      }
    )

    builder.addMatcher(
      isAnyOf(
        fetchQ.rejected,
        fetchQById.rejected,
        createQ.rejected,
        updateQ.rejected,
        removeQ.rejected
      ),
      (state) => {
        state.isLoading = false
        state.error = true
        state.message = 'Request failed'
      }
    )
  },
})

export const { setChosenAnswer, setTestStage, reSet } = questionsSlice.actions
export const selectQuestions = (state: RootState) => state.questions
export default questionsSlice.reducer

const loading = (state: questionsState) => {
  state.isLoading = true
  state.error = false
  state.message = ''
}
