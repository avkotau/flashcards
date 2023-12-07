import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CloseIcon } from '@/assets/icons/components/closeIcon'
import { Card } from '@/components/ui/card'
import { IconButton } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'
import cn from 'classnames'

import s from './modal.module.scss'

export type ModalProps = {
  btn: ReactNode
  className?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ btn, children, className, open, setOpen, title }, ref) => {
    const classNames = cn(className)

    return (
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Trigger asChild>{btn}</Dialog.Trigger>
        {open && (
          <Dialog.Portal>
            <Dialog.Overlay className={s.DialogOverlay} />
            <Dialog.Content className={s.DialogContent} ref={ref}>
              <Card className={classNames}>
                <header className={s.header}>
                  <Typography.H2 className={s.DialogTitle}>{title}</Typography.H2>
                  <Dialog.Close asChild>
                    <IconButton aria-label={'Close'} icon={<CloseIcon />} />
                  </Dialog.Close>
                </header>
                <div className={s.wrapperContent}>{children}</div>
              </Card>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    )
  }
)
