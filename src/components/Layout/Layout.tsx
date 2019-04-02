import * as React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../UI/Toobar/Toobar'
import CSS from './Layout.module.css'
import Logo from '../Logo/Logo'


const layout: React.SFC<{}> = ({ children }) =>
  <Aux>
    <Toolbar>
      <div>Menu</div>
      <Logo></Logo>
      <div>NAV</div>
    </Toolbar>
    <main className={CSS.Content}>
      {children}
    </main>
  </Aux>

export default layout;

