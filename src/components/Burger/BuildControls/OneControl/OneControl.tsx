import * as React from 'react';
import CSS from './OneControl.module.css'
// import { IngredientsWithBread } from '../../BurgerIngredient/BurgerIngredient'



export interface Props {
  label: string
  lessDisabled: boolean
  moreDisabled: boolean
  ingAdded(): void
  ingRemoved(): void
}

const OneControl: React.SFC<Props> = (props) =>
  <div className={CSS.OneControl}>
    <div className={CSS.Label}>{props.label}</div>
    <button className={CSS.More} onClick={props.ingAdded} disabled={props.moreDisabled}>More</button>
    <button className={CSS.Less} onClick={props.ingRemoved} disabled={props.lessDisabled}>Less</button>
  </div>


export default OneControl 