
import { createAsyncThunk } from '@reduxjs/toolkit'

import { create, getAll, getById, remove, update } from '../axios/requests'
import { CreateQuestion, Question } from '../types/questions.type'

export const fetchQ: any = createAsyncThunk('fetchQ/q', async () => {
  const response = await getAll()
  const questions: Question[] = response.data
  return questions
})

export const fetchQById = createAsyncThunk(
  'QuestionsById/q',
  async (id: string) => {
    const response = await getById(id)
    const question: Question = response.data
    return question
  }
)

export const createQ: any = createAsyncThunk(
  'create/q',
  async (question: CreateQuestion) => {
    const response = await create(question)
    const newQuestion: Question = response.data
    return newQuestion
  }
)

export const updateQ = createAsyncThunk(
  'update/q',
  async (question: Partial<Question>) => {
    const response = await update(question)
    const questionUpdated: Question = response.data
    return questionUpdated
  }
)

export const removeQ = createAsyncThunk('remove/q', async (id: string) => {
  const response = await remove(id)
  const questionDeleted: Question = response.data
  return questionDeleted
})
