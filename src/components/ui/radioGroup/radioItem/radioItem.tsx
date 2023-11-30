import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Radio from '@radix-ui/react-radio-group'

import s from './radioItem.module.scss'

type Props = { label: string } & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, Props>(
  ({ disabled, id, label, value, ...rest }, ref) => (
    <form className={s.form}>
      <Radio.Item className={s.item} disabled={disabled} id={id} ref={ref} value={value} {...rest}>
        <Radio.Indicator className={s.indicator} />
      </Radio.Item>
      <label className={s.label} htmlFor={id}>
        <Typography.Body2>{label}</Typography.Body2>
      </label>
    </form>
  )
)