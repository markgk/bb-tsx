import * as React from 'react';
import CSS from './Button.module.css'

interface Btypes {
  Danger: 'Danger'
  Success: 'Success'
  Neutral: 'Neutral'
}

export type ButtonType = keyof Btypes


export interface Props {
  onClick(): void
  buttonType?: ButtonType;
}

const Button: React.SFC<Props> = ({ children, onClick, buttonType = 'Neutral' }) => {
  const ClassList = [CSS.Button, CSS[buttonType]].join(' ')
  console.log('classList', ClassList)
  return <button
    onClick={onClick}
    className={ClassList}
  >{children}</button>
}

export default Button