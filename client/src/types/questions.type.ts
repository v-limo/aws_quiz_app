export interface Question {
  question: string
  choices: string[]
  answers: string[]
  resource?: string[]
  category?: string
  image?: string
  flag?: boolean
  _id?: string
}
