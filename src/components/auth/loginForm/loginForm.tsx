import { useController, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { CustomCheckbox } from '../../ui/checkbox'
import { InputFactory } from '../../ui/input/input'

export type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {}

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFactory {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <InputFactory
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <CustomCheckbox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
