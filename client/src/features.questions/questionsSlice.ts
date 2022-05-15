import { createSlice, isAnyOf } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { Question } from '../types/questions.type'
import { createQ, fetchQ, fetchQById, removeQ, updateQ } from './questions.sync'

type questionsState = {
  questions: Question[]
  isLoading: boolean
  error: boolean
  message: string
}

const initialState = {
  questions: [],
  isLoading: false,
  error: false,
  message: '',
} as questionsState

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    nothing: (state, action) => state,
  },

  extraReducers: (builder) => {
    // Fetch all questions
    builder.addCase(fetchQ.fulfilled, (state, action) => {
      state.questions = action.payload
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
      state.questions = state.questions.filter(
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

export const { nothing } = questionsSlice.actions
export const selectQuestions = (state: RootState) => state.questions
export default questionsSlice.reducer

const loading = (state: questionsState) => {
  state.isLoading = true
  state.error = false
  state.message = ''
}
