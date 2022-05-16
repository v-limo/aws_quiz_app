import axios from 'axios'

import { CreateQuestion, Question } from '../types/questions.type'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL
    : 'http://localhost:5000'

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
})

export const getAll = () => api.get('/api/v1/questions')

export const getById = (id: string) => api.get(`/api/v1/questions/${id}`)

export const create = (question: CreateQuestion) =>
  api.post('/api/v1/questions', question)

export const update = (question: Partial<Question>) =>
  api.put(`/api/v1/questions/${question._id}`, question)

export const remove = (id: string) => api.delete(`/api/v1/questions/${id}`)
