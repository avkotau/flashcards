export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type BaseResponse = {
  avatar?: string | undefined
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpParams = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}
