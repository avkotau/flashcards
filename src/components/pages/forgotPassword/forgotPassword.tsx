import { useState } from 'react'

import { CheckEmail, ForgotPasswordForm } from '@/components'
import { RecoverPasswordParams } from '@/services'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const onSubmit = (requestData: RecoverPasswordParams) => {
    setEmail(requestData.email)
  }

  return (
    <div>
      <ForgotPasswordForm onSubmit={onSubmit} />
      <CheckEmail email={email} />
    </div>
  )
}
