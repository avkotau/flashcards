import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { useGetCardLearnQuery } from '@/features'

import s from './learnCard.module.scss'

export const LearnCard = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  const params = useParams()
  const id = params.id as string

  const data = useGetCardLearnQuery({ id })

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Card className={s.root}>
      <Typography.Large className={s.learn}>Learn card</Typography.Large>
      <Typography.Body2 className={s.question}>Question</Typography.Body2>
      <Typography.Body2 className={s.attempts}>Number of attempts: </Typography.Body2>
      {!!data && <div>{data.status}</div>}
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
