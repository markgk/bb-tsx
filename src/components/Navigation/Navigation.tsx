import * as React from 'react'
import CSS from './Navigation.module.css'
import { log } from 'util';

export interface ItemProps {
  link: string
  label: string
  active: boolean
}

const navItems: ItemProps[] = [
  { label: 'BUILD', link: '/', active: true },
  { label: 'CHECKOUT', link: '/', active: false }
]

const genNavItem = ({ link, label, active }: ItemProps) => {
  return (
    <li className={CSS.NavItem} key={label} >
      <a className={active ? CSS.active : ' '} href={link}>{label}</a>
    </li>
  )
}

export interface Props { }

const Navigation: React.SFC<Props> = (props) =>
  <ul className={CSS.Nav}>{navItems.map(item => genNavItem(item))}</ul>

export default Navigation