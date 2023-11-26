import { JSX, forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { createNewPasswordFormSchema } from '@/components/auth/createNewPasswordForm/createNewPasswordFormSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlledInput/controlledInput'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewPasswordForm.module.scss'

type CreatePasswordFormValue = z.infer<typeof createNewPasswordFormSchema>

type Props = {
  onSubmit: (data: CreatePasswordFormValue) => void
}

export const CreateNewPasswordForm = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref): JSX.Element => {
    const { control, handleSubmit } = useForm({
      defaultValues: {
        password: '',
      },
      resolver: zodResolver(createNewPasswordFormSchema),
    })

    return (
      <Card className={s.wrapper}>
        <Typography.Large className={s.title}>Create new password</Typography.Large>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} ref={ref}>
          <ControlledInput
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Enter new password'}
            rightIcon
            type={'password'}
          />
          <Typography.Body2>
            Create new password and we will send you further instructions to email
          </Typography.Body2>
          <Button as={'button'}>Create New Password</Button>
        </form>
      </Card>
    )
  }
)
