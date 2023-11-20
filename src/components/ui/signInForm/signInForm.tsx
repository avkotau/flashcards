import { JSX, forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card'
import { CustomCheckbox } from '@/components/ui/checkbox'
import { InputFactory } from '@/components/ui/input'
import { signSchema } from '@/components/ui/signInForm/signSchema'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { z } from 'zod'

import s from './signInForm.module.scss'

type FormValues = z.infer<typeof signSchema>

type Props = { onSubmit: (data: FormValues) => void }

export const SignInForm = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref): JSX.Element => {
    const { control, handleSubmit, register } = useForm<FormValues>()

    return (
      <Card className={s.wrapper}>
        <Typography.Large>Sign In</Typography.Large>
        <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
          <DevTool control={control} />
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
          <CustomCheckbox label={'Remember me'} />
        </form>
      </Card>
    )
  }
)
