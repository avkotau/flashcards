import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignInForm } from '@/components'
import { useLoginMutation } from '@/services/authApi'
import { LoginArgs } from '@/services/authApi.types'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const loginHandler = async (loginData: LoginArgs) => {
    try {
      await login(loginData)
      navigate('/')
    } catch (e) {
      toast.error('An error occurred during login')
    }
  }

  return <SignInForm onSubmit={loginHandler} />
}
