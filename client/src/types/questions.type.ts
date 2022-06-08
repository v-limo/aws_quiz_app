export interface Choice {
  choice: string
  correct?: boolean
}

export interface Question {
  question: string
  choices: Choice[]
  _id: string
  source?: string
  chosenAnswers: Choice['choice'][]
}

export interface CreateQuestion {
  question: string
  choices: Choice[]
  source?: string
}

export interface SetChosenAnswer {
  questionId: Question['_id']
  choice: Choice['choice']
}
