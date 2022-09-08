import { FC } from 'react'
import s from './MessageBox.module.scss'

type MessageBoxProps = {
  message: string
}

export const MessageBox: FC<MessageBoxProps> = ({ message }) => {
  return (
    <p className={s.messageBox}>
      {message}
    </p>
  )
}