import express from 'express'

import {
  // deleteQuestion,
  getAllQuestions,
  getQuestion,
  setQuestion,
  // updateQuestion,
} from '../controllers/questions.controller'

const router = express.Router()

router.get('/', getAllQuestions)
router.get('/:QuestionId', getQuestion)
router.post('/', setQuestion)

// router.put('/:QuestionId', updateQuestion)
// router.delete('/:QuestionId', deleteQuestion)

export default router
