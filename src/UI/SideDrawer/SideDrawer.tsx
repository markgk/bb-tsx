import * as React from 'react';
import CSS from './SideDrawer.module.css'
import Backdrop from '../Backdrop/Backdrop'

export interface Props {
  show: boolean;
  clicked(): void
}

const SideDrawer: React.SFC<Props> = ({ show, clicked, children }) => {

  const SDClasses = [CSS.SideDrawer, show ? CSS.Open : CSS.Close].join(' ')
  return (
    <div className={CSS.Display}>
      <Backdrop show={show} onDismissed={clicked} />
      <div className={SDClasses} onClickCapture={(e) => clicked()}>
        {children}
      </div>
    </div>
  )
}
SideDrawer.defaultProps = {

}

export default SideDrawer

