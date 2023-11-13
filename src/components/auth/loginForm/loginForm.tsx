import { useForm } from 'react-hook-form'

import { CustomCheckbox } from '@/components/ui/checkbox'

import { Button } from '../../ui/button'
import { InputFactory } from '../../ui/input/input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFactory {...register('email')} label={'email'} />
      <InputFactory {...register('password')} label={'password'} />
      <CustomCheckbox {...register('rememberMe')} label={'remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
