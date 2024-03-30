import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import { useGetRandomCardQuery } from '@/features'

import s from './learnCard.module.scss'

export const LearnCard = () => {
  const [isImageZoomed, setIsImageZoomed] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleZoom = () => {
    setIsImageZoomed(!isImageZoomed)
  }

  const params = useParams()
  const id = params.id as string

  const { data: card } = useGetRandomCardQuery({ id })

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <Card className={s.root}>
      <Typography.Large className={s.learn}>Learn {card?.name}</Typography.Large>
      <Typography.Body2 className={s.question}>Question {card?.question}</Typography.Body2>
      {card?.questionImg && (
        <div className={s.imgBox}>
          <img
            alt={'Question'}
            className={isImageZoomed ? s.zoomedImage : ''}
            onClick={toggleZoom}
            src={card.questionImg}
          />
        </div>
      )}
      <Typography.Body2 className={s.attempts}>Number of attempts: {card?.shots}</Typography.Body2>
      {showAnswer && (
        <>
          <Typography.Subtitle1 className={s.answer}>Answer: {card?.answer}</Typography.Subtitle1>
          {card?.answerImg && (
            <div className={s.imgBox}>
              <img
                alt={'Answer'}
                className={isImageZoomed ? s.zoomedImage : ''}
                onClick={toggleZoom}
                src={card.answerImg}
              />
            </div>
          )}
          <Typography.Subtitle1 className={s.rate}>Rate yourself: </Typography.Subtitle1>
        </>
      )}

      <Button fullWidth onClick={onShowAnswer}>
        Show Answer
      </Button>
    </Card>
  )
}
