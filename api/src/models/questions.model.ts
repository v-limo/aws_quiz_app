import { Document, model, Schema } from 'mongoose'

type Choice = {
  choice: string
  correct?: boolean
}

export type questionDocument = Document & {
  question: string
  choices: Choice[]
}

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    choices: {
      type: [
        {
          choice: { type: String, required: true },
          correct: { type: Boolean, required: false },
          _id: false,
        },
      ],
    },
  },
  { timestamps: true }
)

export default model<questionDocument>('Question', questionSchema)
