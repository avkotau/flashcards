import { Button, Card, Typography } from '@/components'

export const LearnCard = () => {
  return (
    <Card>
      <Typography.Large>Learn card</Typography.Large>
      <Typography.Body2>Question</Typography.Body2>
      <Typography.Body2>Number of attempts</Typography.Body2>
      <Typography.Subtitle1>Answer:</Typography.Subtitle1>
      <Typography.Subtitle1>Rate yourself:</Typography.Subtitle1>
      <Button fullWidth>Show Answer</Button>
    </Card>
  )
}
