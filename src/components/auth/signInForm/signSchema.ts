import { z } from 'zod'

export const signSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.coerce.boolean().default(false),
})
