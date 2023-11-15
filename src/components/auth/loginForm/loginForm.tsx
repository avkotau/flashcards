import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/loginForm/loginSchema'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { InputFactory } from '../../ui/input/input'

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFactory {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <InputFactory
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
