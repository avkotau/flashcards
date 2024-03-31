import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components'
import { rateOptions } from '@/features'

type RateLearnCardValues = {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup control={control} name={'grade'} options={rateOptions} value={'1'} />
    </form>
  )
}
