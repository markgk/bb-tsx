import * as React from 'react';
import CSS from './OneControl.module.css'
import Button from '../../../../UI/Button/Button'



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
    <Button buttonType={'Success'} onClick={props.ingAdded} disabled={props.moreDisabled}>More</Button>
    <Button buttonType={'Danger'} onClick={props.ingRemoved} disabled={props.lessDisabled}>Less</Button>
  </div>


export default OneControl 