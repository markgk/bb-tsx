import * as React from 'react';
import CSS from './Burger.module.css'
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
import { BREAD_BOTTOM, BREAD_TOP, IngredientList } from '../BurgerIngredient/BurgerIngredient'


export interface Props {
  ingredients: IngredientList<number>
}

const Burger: React.SFC<Props> = ({ ingredients }) => {
  const ingredientsJSX = Object.entries(ingredients)
    .map(([s, l]) => Array(l).fill(s))
    .flat()
    .map((t, i) => <BurgerIngredient key={i + t} type={t} />)

  console.log('ings', ingredientsJSX)

  return (
    <div className={CSS.Burger}>
      <BurgerIngredient type={BREAD_TOP} />
      {ingredientsJSX.length === 0 ?
        <p> Please start adding ingredients</p> :
        ingredientsJSX
      }
      <BurgerIngredient type={BREAD_BOTTOM} />
    </div>
  )
}
export default Burger
