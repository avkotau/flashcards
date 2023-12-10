import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { control, name, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} name={name} onValueChange={onChange} value={value} />
}
