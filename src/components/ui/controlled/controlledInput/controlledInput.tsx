import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { InputFactory, InputProps } from '@/components'

export type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <InputFactory {...field} errorMessage={error?.message} {...rest} />
}
