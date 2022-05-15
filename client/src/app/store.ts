import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import questionsReducer from '../features.questions/questionsSlice'

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
