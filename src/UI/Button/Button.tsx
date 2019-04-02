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
  disabled?: boolean;
}

const Button: React.SFC<Props> = ({ children, onClick, buttonType, disabled }) => {
  const bType = buttonType || 'Neutral'
  const bDisabled = disabled || false
  const ClassList = [CSS.Button, CSS[bType]].join(' ')
  console.log('classList', ClassList)
  console.log('disabled', disabled)
  return <button
    onClick={onClick}
    className={ClassList}
    disabled={bDisabled}
  >{children}</button>
}

export default Button