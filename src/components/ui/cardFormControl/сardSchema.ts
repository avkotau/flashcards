import { z } from 'zod'

export const cardSchema = z.object({
  answer: z.string().min(1, 'Field is required!').trim(),
  answerFormat: z.string().trim(),
  question: z.string().min(1, 'Field is required!').trim(),
  questionFormat: z.string().trim(),
})

export type CardFormValuesType = z.infer<typeof cardSchema>
