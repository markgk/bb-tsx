import * as React from 'react';
import CSS from './BurgerIngredient.module.css'


export interface IngredientList<T> {
  salad: T;
  bacon: T;
  cheese: T;
  meat: T;
}
export type Ingredient = keyof IngredientList<any>

interface BurgerIngredients extends IngredientList<React.ReactElement> {
  breadTop: React.ReactElement
  breadBottom: React.ReactElement;
}
export type IngredientsWithBread = keyof BurgerIngredients

// const x: IngredientList<Ingredient> = { salad: 'salad', bacon: 'bacon', cheese: 'cheese', meat: 'meat' }
// export const INGREDIENTS = Object.keys(x)
export const BREAD_TOP: IngredientsWithBread = 'breadTop'
export const BREAD_BOTTOM: IngredientsWithBread = 'breadBottom'

const INGREDIENT_MAP: BurgerIngredients = {
  breadTop:
    <div className={CSS.BreadTop}>
      <div className={CSS.Seeds1}></div>
      <div className={CSS.Seeds2}></div>
    </div>,

  breadBottom: <div className={CSS.BreadBottom}></div>,
  salad: <div className={CSS.Salad}></div>,
  bacon: <div className={CSS.Bacon}></div>,
  cheese: <div className={CSS.Cheese}></div>,
  meat: <div className={CSS.Meat}></div>,
}

export interface Props {
  type: IngredientsWithBread;
}

const BurgerIngredient: React.SFC<Props> = (props) => {

  console.log('BurgerIngredint ', props)
  return (INGREDIENT_MAP[props.type]);

}

export default BurgerIngredient;
