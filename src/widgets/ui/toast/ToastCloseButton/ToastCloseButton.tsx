import React, { ComponentPropsWithoutRef } from 'react'

import { Theme } from 'react-toastify'

import {Close} from "../../../../shared/assets/icons/outline";

import style from './ToastCloseButton.module.scss'

type Props = {
  ariaLabel?: string
  closeToast?: (e: React.MouseEvent<HTMLElement>) => void
  theme?: Theme
} & Omit<ComponentPropsWithoutRef<'button'>, 'type'>

export const ToastCloseButton = ({ closeToast, ...rest }: Props) => {
  return (
    <button className={style.ToastCloseButton} onClick={closeToast} {...rest}>
      <Close className={style.icon}/>
    </button>
  )
}
