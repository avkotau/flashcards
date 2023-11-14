import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { CustomCheckbox } from '../../ui/checkbox'
import { InputFactory } from '../../ui/input/input'

export type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {}

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFactory
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <InputFactory
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        errorMessage={errors.email?.message}
        label={'password'}
      />
      <CustomCheckbox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
