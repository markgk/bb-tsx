import * as React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../UI/Toobar/Toobar'
import CSS from './Layout.module.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import SideMenu from '../SideMenu/SideMenu'
import Button from '../../UI/Button/Button'
import { isUndefined } from 'util';


export interface State {
  showDrawer: boolean
}
class Layout extends React.Component<{}, State> {
  state = { showDrawer: false }

  toggleSideMenue = () => this.setState((ps, _) => ({ showDrawer: !ps.showDrawer }))


  render() {

    const displayNav = CSS.DisplayNav !== undefined
    const leftButton = displayNav
      ? <Button onClick={this.toggleSideMenue}>Menu</Button>
      : null
    const rightNavbar = !displayNav
      ? <Navigation></Navigation>
      : null

    return (
      <Aux>
        <Toolbar>
          <div className={CSS.DisplaySide}>
            <Button onClick={this.toggleSideMenue}>Menu</Button>
          </div>
          <Logo />
          <div className={CSS.DisplayNav}>
            <Navigation></Navigation>
          </div>
        </Toolbar>
        <SideMenu show={this.state.showDrawer} clicked={this.toggleSideMenue} />
        <main className={CSS.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;

