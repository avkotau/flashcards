import { z } from 'zod'

export const editNameSchema = z.object({
  name: z.string().min(3).trim(),
})
