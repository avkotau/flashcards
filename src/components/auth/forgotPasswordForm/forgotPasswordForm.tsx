import { JSX, forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import { forgotPasswordFormSchema } from '@/components/auth/forgotPasswordForm/forgotPasswordFormSchema'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlledInput/controlledInput'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgotPasswordForm.module.scss'
type FormValues = z.infer<typeof forgotPasswordFormSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}

export const ForgotPasswordForm = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref): JSX.Element => {
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
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} ref={ref}>
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
        <Typography.Link1 className={s.registerAcc}>
          Did you remember your password?
        </Typography.Link1>
        <Button as={'a'} className={s.sendBtn} type={'submit'} variant={'link'}>
          Try logging in
        </Button>
      </Card>
    )
  }
)
