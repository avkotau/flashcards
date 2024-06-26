import { JSX } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Routes } from '@/common'
import { Button, Card, ControlledInput, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signUpForm.module.scss'

import { signUpSchema } from './signUpSchema'

type FormValues = z.infer<typeof signUpSchema>

type Props = { onSubmit: (data: FormValues) => void }

export const SignUpForm = ({ onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.wrapper}>
      <DevTool control={control} />
      <Typography.Large className={s.title}>Sign Up</Typography.Large>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Enter email'}
          type={'text'}
        />
        <ControlledInput
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'Enter password'}
          rightIcon
          type={'password'}
        />
        <ControlledInput
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Enter confirm password'}
          rightIcon
          type={'password'}
        />
        <Button fullWidth>Sign Up</Button>
      </form>
      <Typography.Link1 className={s.registerAcc}>Already have an account?</Typography.Link1>
      <Button as={Link} className={s.signInBtn} to={Routes.SignIn} type={'submit'} variant={'link'}>
        Sign In
      </Button>
    </Card>
  )
}
