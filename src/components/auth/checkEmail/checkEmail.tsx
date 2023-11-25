import { Email } from '@/assets/images'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './checkEmail.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.wrapper}>
      <Typography.Large className={s.title}>Check Email</Typography.Large>
      <Email className={s.emailImg} />
      <Typography.Body2
        className={s.instructionsText}
      >{`We’ve sent an Email with instructions to ${email}`}</Typography.Body2>
      <Button as={'button'} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
