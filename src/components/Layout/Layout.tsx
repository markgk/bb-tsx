import * as React from 'react';
import Aux from '../../hoc/Aux'
import CSS from './Layout.module.css'


const layout: React.SFC<{}> = ({ children }) =>
  <Aux>
    <div>Toolbar, SideDrawer, Backfrop</div>
    <main className={CSS.Content}>
      {children}
    </main>
  </Aux>

export default layout;

