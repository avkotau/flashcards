import { useForm } from 'react-hook-form'

import { Button, ControlledRadioGroup } from '@/components'
import { rateOptions } from '@/features'

import s from './rateLearnCard.module.scss'

export type RateLearnCardValues = {
  grade: string
}

type Props = {
  onSubmit: (data: RateLearnCardValues) => void
}

export const RateLearnCard = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<RateLearnCardValues>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup control={control} name={'grade'} options={rateOptions} value={'1'} />
      <Button fullWidth type={'submit'}>
        Next
      </Button>
    </form>
  )
}
