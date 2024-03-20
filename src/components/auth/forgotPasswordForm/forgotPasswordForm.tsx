import { JSX } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Routes } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgotPasswordForm.module.scss'

import { forgotPasswordFormSchema } from './forgotPasswordFormSchema'

type FormValues = z.infer<typeof forgotPasswordFormSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  return (
    <Card className={s.wrapper}>
      <DevTool control={control} />
      <Typography.Large className={s.title}>Forgot your password?</Typography.Large>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Enter email'}
          type={'text'}
        />
        <Typography.Body2>
          Enter your email address and we will send you further instructions
        </Typography.Body2>
        <Button fullWidth>Send Instructions</Button>
      </form>
      <Typography.Link1 className={s.registerAcc}>Did you remember your password?</Typography.Link1>
      <Button as={Link} className={s.sendBtn} to={Routes.SignIn} type={'submit'} variant={'link'}>
        Try logging in
      </Button>
    </Card>
  )
}
