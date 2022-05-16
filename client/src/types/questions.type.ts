export interface Choice {
  choice: string
  correct?: boolean
}

export interface Question {
  question: string
  choices: Choice[]
  _id?: string
}

export interface CreateQuestion {
  question: string
  choices: Choice[]
}
