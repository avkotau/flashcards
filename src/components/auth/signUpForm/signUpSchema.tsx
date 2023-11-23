import { z } from 'zod'

export const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3).trim(),
    email: z.string().email({ message: 'Invalid email, please try agan' }).trim(),
    password: z.string().min(3).trim(),
  })
  .refine(
    values => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  )
