import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CustomSelect, CustomSelectProps } from '@/components/ui/select'

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CustomSelectProps, 'onValueChange' | 'value'>

export const ControlledSelector = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, name })

  return (
    <CustomSelect
      label={rest.label || 'Choose a question format'}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
  )
}
