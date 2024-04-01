export type RadioOption = {
  disabled: boolean
  id: string
  label: string
  value: string
}

export const rateOptions: RadioOption[] = [
  { disabled: false, id: '1', label: 'Did not know', value: '1' },
  { disabled: false, id: '2', label: 'Forgot', value: '2' },
  { disabled: false, id: '3', label: 'A lot of thought', value: '3' },
  { disabled: false, id: '4', label: 'Confused', value: '4' },
  { disabled: false, id: '5', label: 'Knew the answer', value: '5' },
]
