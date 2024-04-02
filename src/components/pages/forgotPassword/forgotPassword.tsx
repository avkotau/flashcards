import { useState } from 'react'

import { CheckEmail, ForgotPasswordForm } from '@/components'
import { useRecoverPasswordMutation } from '@/features'
import { RecoverPasswordParams } from '@/services'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const [recoverPassword, { isSuccess }] = useRecoverPasswordMutation()

  const onSubmit = (request: RecoverPasswordParams) => {
    recoverPassword(request)
    setEmail(request.email)
  }

  return (
    <div>
      {!isSuccess ? <ForgotPasswordForm onSubmit={onSubmit} /> : <CheckEmail email={email} />}
    </div>
  )
}
