import React, {FC} from 'react';
import s from './App.module.scss'
import {Button} from "antd";
import { PoweroffOutlined } from '@ant-design/icons';
import initialize from '../src/assets/INITIALIZE_1_HQ.json'
import {useLottie} from "lottie-react";

export const App:FC = () => {

  const options = {
    animationData: initialize,
    loop: true,
  }
  const {View}  = useLottie(options)


  return (
    <div className={s.app}>
      <Button
        size={'large'}
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={() => console.log('!') }
      >
        Click me!
      </Button>
      <div>
        { View }
      </div>
    </div>
  );
}
