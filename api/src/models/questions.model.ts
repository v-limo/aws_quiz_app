import { Document, model, Schema } from 'mongoose'

type Choice = {
  choice: string
  correct?: boolean
}

export type questionDocument = Document & {
  question: string
  choices: Choice[]
  source?: string
  resources?: string[]
}

const questionSchema = new Schema(
  {
    question: { type: String, required: true, unique: true },
    choices: {
      type: [
        {
          choice: { type: String, required: true },
          correct: { type: Boolean, required: false },
          _id: false,
        },
      ],
      required: true,
    },
    source: {
      type: String,
      required: false,
    },
    resources: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
)

export default model<questionDocument>('Question', questionSchema)
