import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckboxProps, CustomCheckbox } from '@/components'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>(
  props: ControlledCheckboxProps<TFieldValues>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...checkboxProps } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <CustomCheckbox
      {...{
        checked: value,
        defaultValue,
        id: name,
        name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
