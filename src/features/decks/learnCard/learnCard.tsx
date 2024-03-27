import { useState } from 'react'

import { Button, Card, Typography } from '@/components'

import s from './learnCard.module.scss'

export const LearnCard = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Card className={s.root}>
      <Typography.Large className={s.learn}>Learn card</Typography.Large>
      <Typography.Body2 className={s.question}>Question</Typography.Body2>
      <Typography.Body2 className={s.attempts}>Number of attempts: </Typography.Body2>

      {showAnswer && (
        <>
          <Typography.Subtitle1 className={s.answer}>Answer: </Typography.Subtitle1>
          <Typography.Subtitle1 className={s.rate}>Rate yourself: </Typography.Subtitle1>
        </>
      )}

      <Button fullWidth onClick={onShowAnswer}>
        Show Answer
      </Button>
    </Card>
  )
}
