import { z } from 'zod'

export const createNewPasswordFormSchema = z.object({
  password: z.string().min(3, 'Your password is very short, min 3 characters').trim(),
})
