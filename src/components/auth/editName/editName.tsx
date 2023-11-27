import { FC, JSX } from 'react'
import { useForm } from 'react-hook-form'

import { editNameSchema } from '@/components/auth/editName/editNameSchema'
import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled/controlledInput/controlledInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type EditProfileValues = z.infer<typeof editNameSchema>

type Props = {
  initialName?: EditProfileValues
  onSubmit: (data: EditProfileValues) => void
}
export const EditName: FC<Props> = ({
  initialName = { name: '' },
  onSubmit,
}: Props): JSX.Element => {
  const { control, handleSubmit } = useForm<EditProfileValues>({
    defaultValues: initialName,
    resolver: zodResolver(editNameSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput control={control} label={'Nickname'} name={'name'} />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
