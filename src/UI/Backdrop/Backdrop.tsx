import * as React from 'react';
import CSS from './Backdrop.module.css'

export interface Props {
  show: boolean
  onDismissed(): void
}

const Backdrop: React.SFC<Props> = ({ show, onDismissed }) => {
  if (!show) return null;
  return (
    <div onClick={() => onDismissed()} className={CSS.Backdrop} />
  )
}

export default Backdrop