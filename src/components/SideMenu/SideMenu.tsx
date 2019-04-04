import * as React from 'react'
import SlideDrawer from '../../UI/SideDrawer/SideDrawer'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import CSS from './SideMenu.module.css'

export interface Props {
  show: boolean
  clicked(): void
}

const SideMenu: React.SFC<Props> = (props) =>
  <SlideDrawer show={props.show} clicked={props.clicked}>
    <div>
      <div className={CSS.Logo}>
        <Logo />
      </div>
      <Navigation />
    </div>

  </SlideDrawer>


export default SideMenu