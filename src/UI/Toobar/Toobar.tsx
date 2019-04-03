import * as React from 'react';
import CSS from './Toolbar.module.css'
export interface Props { }

const Toolbar: React.SFC<Props> = ({ children }) => {
  return (
    <div className={CSS.Toolbar}>
      {children}
    </div>
  );
}
Toolbar.defaultProps = {
  children: [<div>MENU</div>, <div>LOGO</div>, <div>NAV</div>]
}

export default Toolbar;