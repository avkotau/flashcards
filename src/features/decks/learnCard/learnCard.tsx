import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button, Card, Typography } from '@/components'
import {
  RateLearnCard,
  RateLearnCardValues,
  useGetRandomCardQuery,
  useRateCardMutation,
} from '@/features'

import s from './learnCard.module.scss'

export const LearnCard = () => {
  const [isImageZoomed, setIsImageZoomed] = useState({ answerImg: false, questionImg: false })

  const [showAnswer, setShowAnswer] = useState(false)
  const [rateCard] = useRateCardMutation()

  const toggleZoom = (imageKey: keyof typeof isImageZoomed) => {
    setIsImageZoomed(prevState => ({
      ...prevState,
      [imageKey]: !prevState[imageKey],
    }))
  }

  const params = useParams()
  const id = params.id as string

  const { data: card } = useGetRandomCardQuery({ id })

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  const onHandlerRate = (data: RateLearnCardValues) => {
    rateCard(data)
  }

  return (
    <Card className={s.root}>
      <Typography.Large className={s.learn}>Learn {card?.name}</Typography.Large>
      <Typography.Body2 className={s.question}>Question {card?.question}</Typography.Body2>
      {card?.questionImg && (
        <div className={s.imgBox}>
          <img
            alt={'Question'}
            className={isImageZoomed.questionImg ? s.zoomedImage : ''}
            onClick={() => toggleZoom('questionImg')}
            src={card.questionImg}
          />
        </div>
      )}
      <Typography.Body2 className={s.attempts}>Number of attempts: {card?.shots}</Typography.Body2>
      {showAnswer ? (
        <>
          <Typography.Subtitle1 className={s.answer}>Answer: {card?.answer}</Typography.Subtitle1>
          {card?.answerImg && (
            <div className={s.imgBox}>
              <img
                alt={'Answer'}
                className={isImageZoomed.answerImg ? s.zoomedImage : ''}
                onClick={() => toggleZoom('answerImg')}
                src={card.answerImg}
              />
            </div>
          )}
          <Typography.Subtitle1 className={s.rate}>Rate yourself: </Typography.Subtitle1>
          <RateLearnCard onSubmit={onHandlerRate} />
        </>
      ) : (
        <Button fullWidth onClick={onShowAnswer}>
          Show Answer
        </Button>
      )}
    </Card>
  )
}
