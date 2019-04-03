import * as React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../UI/Toobar/Toobar'
import CSS from './Layout.module.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'


const layout: React.SFC<{}> = ({ children }) =>
  <Aux>
    <Toolbar>
      <div>Menu</div>
      <Logo></Logo>
      <Navigation></Navigation>
    </Toolbar>
    <main className={CSS.Content}>
      {children}
    </main>
  </Aux>

export default layout;

