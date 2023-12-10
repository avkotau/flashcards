import { z } from 'zod'

export const addDeckSchema = z.object({
  isPrivate: z.boolean().default(false),
  name: z.string().min(1, 'Field is required!'),
})

export type DeckFormValues = z.infer<typeof addDeckSchema>
