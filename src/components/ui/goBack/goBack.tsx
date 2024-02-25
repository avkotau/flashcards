import { ElementRef, JSX, forwardRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BackArrowIcon } from '@/assets'
import { Routes } from '@/common'
import { Button } from '@/components'
import cn from 'classnames'

import s from './goBack.module.scss'

type Props = {
  className?: string
  title: string
  to?: Routes
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(
  ({ className, title, to }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    const goBackClassName = cn(s.root, className)

    return (
      <Button className={goBackClassName} onClick={onBack} ref={ref} variant={Link}>
        <BackArrowIcon />
        {title}
      </Button>
    )
  }
)
