import { z } from 'zod'

export const signSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email, please try agan' }),

  password: z.string().trim().min(3, 'Your password is very short, min 3 characters'),

  rememberMe: z.coerce.boolean().default(false),
})
