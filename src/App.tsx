import React, { FC, useCallback, useState } from 'react'
import s from './App.module.scss'
import { Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import initialize from '../src/assets/INITIALIZE_1_HQ.json'
import Lottie from 'lottie-react'
import { delay } from './utilits/delay'
import { MessageBox } from './components/messageBox/MessageBox'

export const App: FC = () => {
  const [displayButton, setDisplayButton] = useState(true)
  const [displayMessage, setDisplayMessage] = useState(false)

 // use hook for optimize
  const startLoading = useCallback(async () => {
    //hide button and display preloader
    setDisplayButton(false)
    //wait 3 seconds
    await delay(3000)
    //hide preloader and display message
    setDisplayMessage(true)
  }, [])

  return (
    <div className={s.app}>
      {displayButton && <Button size={'large'}
                                type='primary'
                                icon={<PoweroffOutlined />}
                                onClick={startLoading}>Click me!</Button>}
      {!displayButton &&
        !displayMessage &&
        <Lottie animationData={initialize} loop className={s.preloader} />}
      {displayMessage && <MessageBox message={'Привет!\nЧем могу помочь?'} />}
    </div>
  )
}
