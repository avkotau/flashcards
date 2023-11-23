import { z } from 'zod'

export const signSchema = z.object({
  email: z.string().email({ message: 'Invalid email, please try agan' }).trim(),

  password: z.string().min(3, 'Your password is very short, min 3 characters').trim(),

  rememberMe: z.coerce.boolean().default(false),
})
