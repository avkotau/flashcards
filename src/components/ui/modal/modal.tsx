import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CloseIcon } from '@/assets'
import { Card, IconButton, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'
import cn from 'classnames'

import s from './modal.module.scss'

export type ModalProps = {
  className?: ReactNode
  isOpenModalBtn: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = forwardRef<ElementRef<'div'>, ModalProps>(
  ({ children, className, isOpenModalBtn, open, setOpen, title }, ref) => {
    const classNames = cn(className)

    return (
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Trigger asChild>{isOpenModalBtn}</Dialog.Trigger>
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
