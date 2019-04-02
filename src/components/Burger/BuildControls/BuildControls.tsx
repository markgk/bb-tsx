import * as React from 'react';
import OneControl from './OneControl/OneControl'
import CSS from './BuildControls.module.css'
import { Ingredient, IngredientList } from '../BurgerIngredient/BurgerIngredient'
import { MAX_INGREDIENT_COUNT } from '../../../containers/BurgerBuilder/BurgerBuilder'
import Button from '../../../UI/Button/Button'

export interface Props {
  ingredients: IngredientList<number>
  price: number,
  ingAdded(type: Ingredient): void
  ingRemoved(type: Ingredient): void
  postModal(): void
  dismissModal(): void
}

const BuildControls: React.SFC<Props> = (props) => {

  const postOrder = () => {

  }

  const ingsArray = Object.entries(props.ingredients) as [Ingredient, number][]
  const disableOrder = ingsArray.reduce((s, [_, i]) => s += i, 0) == 0

  return (
    <div className={CSS.BuildControls}>
      <p><strong>{props.price.toFixed(2)}</strong></p>
      {ingsArray.map(([t, n]) =>
        <OneControl
          key={t}
          label={t}
          ingAdded={() => { props.ingAdded(t) }}
          ingRemoved={() => { props.ingRemoved(t) }}
          lessDisabled={n == 0}
          moreDisabled={n == MAX_INGREDIENT_COUNT}
        />)}
      <Button disabled={disableOrder} onClick={props.postModal}>ORDER NOW</Button>
    </div>

  );
}


export default BuildControls