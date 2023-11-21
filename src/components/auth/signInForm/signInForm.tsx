import { JSX, forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { InputFactory } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { z } from 'zod'

import s from './signInForm.module.scss'

import { signSchema } from './signSchema'

type FormValues = z.infer<typeof signSchema>

type Props = { onSubmit: (data: FormValues) => void }

export const SignInForm = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref): JSX.Element => {
    const { control, handleSubmit, register } = useForm<FormValues>()

    return (
      <Card className={s.wrapper}>
        <Typography.Large className={s.title}>Sign In</Typography.Large>
        <DevTool control={control} />
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} ref={ref}>
          <InputFactory
            label={'Email'}
            placeholder={'Enter email'}
            type={'text'}
            {...register('email')}
          />
          <InputFactory
            label={'Password'}
            placeholder={'Enter password'}
            rightIcon
            type={'password'}
            {...register('password')}
          />
          <ControlledCheckbox
            control={control}
            defaultValue={false}
            label={'remember me'}
            name={'rememberMe'}
          />
          <Typography.Body2>Forgot Password?</Typography.Body2>
          <Button fullWidth>Sign In</Button>
        </form>
        <Typography.Body2>Don&apos;t have an account?</Typography.Body2>
        <Button as={'a'} type={'submit'} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    )
  }
)
