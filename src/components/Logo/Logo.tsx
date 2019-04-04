import * as React from 'react';
import burgerImage from '../../assets/images/burger-logo.png'
import CSS from './Logo.module.css'

export interface Props { }

const Logo: React.SFC<Props> = ({ }) => {
  return (
    <div className={CSS.Logo}>
      <img src={burgerImage} alt="My Burger" />
    </div>

  );
}

export default Logo;