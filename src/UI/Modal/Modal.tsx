import * as React from 'react';
import CSS from './Modal.module.css'

export interface Props {
  show: boolean
  onDismissed(): void
}

const Modal: React.SFC<Props> = ({ show, onDismissed, children }) => {
  const modal = show ? (
    <div>
      <div onClick={() => {
        console.log('clicked')
        onDismissed()
      }} className={CSS.Backdrop} />
      <div className={CSS.Modal}>
        {children}
      </div>
    </div>
  ) : null;

  return modal;
};

export default Modal;

