import { NextFunction, Request, Response } from 'express'

import { BadRequestError } from '../helpers/apiError'
import Question from '../models/questions.model'
import questionService from '../services/question.service'

// POST /questions
export const setQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { question, choices } = req.body
    const newQuestion = new Question({
      question,
      choices,
    })
    const createdQuestion = await questionService.create(newQuestion)
    res.json(createdQuestion)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /questions/:questionId
export const updateQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const questionId = req.params.questionId
    const updatedquestion = await questionService.update(questionId, update)
    res.json(updatedquestion)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /questions/:questionId
export const deleteQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await questionService.deleteQuestion(req.params.questionId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /questions/:questionId
export const getQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await questionService.findById(req.params.questionId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /questions
export const getAllQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await questionService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
