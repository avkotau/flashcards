import { FC } from 'react'

import s from '@/components/ui/card/card.module.scss'

type Props = {
  sHeight: number
  sWidth: number
}
export const Card: FC<Props> = ({ sHeight, sWidth, ...restProps }) => {
  return (
    <div
      className={s.card}
      style={{ height: sHeight + 'px', width: sWidth + 'px' }}
      {...restProps}
    ></div>
  )
}
