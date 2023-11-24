import { JSX, forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { ControlledInput } from '@/components/ui/controlled/controlledInput/controlledInput'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signInForm.module.scss'

import { signSchema } from './signSchema'

type FormValues = z.infer<typeof signSchema>

type Props = { onSubmit: (data: FormValues) => void }

export const SignInForm = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref): JSX.Element => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        email: '',
        password: '',
        rememberMe: false,
      },
      resolver: zodResolver(signSchema),
    })

    return (
      <Card className={s.wrapper}>
        <DevTool control={control} />
        <Typography.Large className={s.title}>Sign In</Typography.Large>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} ref={ref}>
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
            placeholder={'Confirm password'}
            rightIcon
            type={'password'}
          />
          <ControlledCheckbox
            control={control}
            defaultValue={false}
            label={'Remember me'}
            name={'rememberMe'}
          />
          <Typography.Link1>Forgot Password?</Typography.Link1>
          <Button fullWidth>Sign In</Button>
        </form>
        <Typography.Link1 className={s.registerAcc}>Don&apos;t have an account?</Typography.Link1>
        <Button as={'a'} className={s.signUpBtn} type={'submit'} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    )
  }
)