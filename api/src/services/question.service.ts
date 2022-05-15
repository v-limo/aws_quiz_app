import { NotFoundError } from '../helpers/apiError'
import Question, { questionDocument } from '../models/questions.model'

const create = async (
  question: questionDocument
): Promise<questionDocument> => {
  return question.save()
}

const findAll = async (): Promise<questionDocument[]> => {
  return Question.find()
}

const findById = async (questionId: string): Promise<questionDocument> => {
  const foundquestion = await Question.findById(questionId)
  if (!foundquestion) {
    throw new NotFoundError(`question ${questionId} not found`)
  }
  return foundquestion
}

const update = async (
  questionId: string,
  update: Partial<questionDocument>
): Promise<questionDocument | null> => {
  const foundquestion = await Question.findByIdAndUpdate(questionId, update, {
    new: true,
  })
  if (!foundquestion) {
    throw new NotFoundError(`question ${questionId} not found`)
  }
  return foundquestion
}

const deleteQuestion = async (
  questionId: string
): Promise<questionDocument | null> => {
  const foundquestion = Question.findByIdAndDelete(questionId)

  if (!foundquestion) {
    throw new NotFoundError(`question ${questionId} not found`)
  }
  return foundquestion
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteQuestion,
}
