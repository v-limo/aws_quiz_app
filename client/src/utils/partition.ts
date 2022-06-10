import { Question } from '../types/questions.type'

const partition = (arr: Question[], size: number) => {
  const result = []
  let i = 0
  while (i < arr.length) {
    result.push(arr.slice(i, (i += size)))
  }
  return result
}

export default partition
