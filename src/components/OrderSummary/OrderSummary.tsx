import * as React from 'react';
import CSS from './OrderSummary.module.css'
import { IngredientList } from '../BurgerIngredient/BurgerIngredient';
import Button from '../../UI/Button/Button'

export interface Props {
  ingCounts: IngredientList<number>;
  priceList: IngredientList<number>
  dismissOrder(): void
  placeOrder(): void
}



const OrderSummary: React.SFC<Props> = ({ ingCounts, priceList, dismissOrder, placeOrder }) => {
  const p = Object.values(priceList)
  const ic = Object.entries(ingCounts).map(([s, ns]) => [s, +ns]) as [string, number][]
  const icp: [string, number, number][] = []

  ic.map(([ing, cnt], index) => icp.push([ing, cnt, parseFloat(p[index])]))


  const ingJSX = icp.map(([ing, cnt, price]) =>
    <li key={ing}>
      <p><strong>{cnt}@{price.toFixed(2)} = {(cnt * price).toFixed(2)}</strong>&nbsp;&nbsp; {ing}</p>
    </li>)

  return (
    <div>
      <h1>ORDER SUMMARY</h1>
      <hr />
      <ul className={CSS.OrderList}>
        {ingJSX}
      </ul>
      <hr />
      <p><strong>{icp.reduce((s, [_, cnt, prc]) => s += cnt * prc, 0).toFixed(2)}</strong></p>
      <hr />
      <Button onClick={dismissOrder} buttonType={'Danger'}>CANCEL</Button>
      <Button onClick={placeOrder} buttonType={'Success'}>BUY</Button>
    </div>
  )
}

export default OrderSummary;