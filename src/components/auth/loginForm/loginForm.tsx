import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, InputFactory } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { loginSchema } from './loginSchema'

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <InputFactory {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <InputFactory
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <ControlledCheckbox
        control={control}
        defaultValue={false}
        label={'remember me'}
        name={'rememberMe'}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
