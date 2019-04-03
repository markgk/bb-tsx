import * as React from 'react';
import CSS from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'



export interface Props {
  show: boolean
  onDismissed(): void
}

const Modal: React.SFC<Props> = ({ show, onDismissed, children }) => {
  const modal = show ? (
    <div >
      <Backdrop show={show} onDismissed={onDismissed}></Backdrop>
      <div className={CSS.ModalContainer}>
        <div className={CSS.Modal}>
          {children}
        </div>
      </div>
    </div>
  ) : null;

  return modal;
};

export default Modal;
