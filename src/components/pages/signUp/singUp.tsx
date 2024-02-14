import { useNavigate } from 'react-router-dom'

import { Routes } from '@/common'
import { SignUpForm } from '@/components'
import { SignUpParams, useSignUpMutation } from '@/services'

export const SingUp = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const onSignUp = ({ email, password }: SignUpParams) => {
    signUp({ email, password })

    navigate(Routes.SignIn)
  }

  return <SignUpForm onSubmit={onSignUp} />
}
