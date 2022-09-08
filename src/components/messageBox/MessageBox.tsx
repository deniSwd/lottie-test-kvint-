import { CSSProperties, FC } from 'react'
import s from './MessageBox.module.scss'

type MessageBoxProps = {
  style: CSSProperties
  message: string
}

export const MessageBox: FC<MessageBoxProps> = ({ message, style }) => {
  return (
    <p className={s.messageBox} style={style}>
      {message}
    </p>
  )
}