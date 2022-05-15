import { Document, model, Schema } from 'mongoose'

export type questionDocument = Document & {
  question: string
  choices: string[]
  answer: string[]
  resource?: string[]
  category?: string
  image?: string
  flag?: boolean
}

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    choices: { type: [String], required: true },
    answer: { type: [String], required: true },
  },
  { timestamps: true }
)

export default model<questionDocument>('Question', questionSchema)
