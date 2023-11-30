import { z } from 'zod'

export type EditProfileValues = z.infer<typeof editNameSchema>

export const editNameSchema = z.object({
  name: z.string().min(3).trim(),
})
