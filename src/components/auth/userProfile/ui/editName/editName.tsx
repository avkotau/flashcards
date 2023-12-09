import { FC, JSX } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ControlledInput } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './editName.module.scss'

import { EditProfileValues, editNameSchema } from './editNameSchema'

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
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput control={control} label={'Nickname'} name={'name'} />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
