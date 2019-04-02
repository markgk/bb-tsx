import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import { IngredientList, Ingredient } from '../../components/BurgerIngredient/BurgerIngredient'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'


export interface Props { }


export interface State {
  ingredients: IngredientList<number>
  price: number
  modalOn: boolean;
}

const PRICE_LIST: IngredientList<number> = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.3,
  bacon: 0.7
}
export const MAX_INGREDIENT_COUNT = 3


class BurgerBuilder extends React.Component<Props, State> {

  state: State = {
    ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
    price: 0,
    modalOn: false
  }

  addIngredient = (type: Ingredient) => {
    console.log('Add Ingredient Method', type, this.state.ingredients[type])
    if (this.state.ingredients[type] < MAX_INGREDIENT_COUNT) {
      const newIngs = { ...this.state.ingredients }
      newIngs[type]++
      const newPrice = this.state.price + PRICE_LIST[type];
      const newState = { ...this.state, ingredients: newIngs, price: newPrice }
      this.setState(newState)
    }
  }
  removeIngredient = (type: Ingredient) => {
    console.log('Remove Ingredient Method', type, this.state.ingredients[type])
    if (this.state.ingredients[type] > 0) {
      const newIngs = { ...this.state.ingredients }
      newIngs[type]--
      const newPrice = this.state.price - PRICE_LIST[type];
      this.setState({ ...this.state, ingredients: newIngs, price: newPrice })
    }
  }
  postModal = () => this.setState({ modalOn: true })
  dismissModal = () => this.setState({ modalOn: false })

  placeOrder = () => {
    console.log('Place Order')
    this.dismissModal()
  }
  dismissOrder = this.dismissModal


  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />

        <Modal show={this.state.modalOn} onDismissed={this.dismissModal}>
          <OrderSummary
            ingCounts={this.state.ingredients}
            priceList={PRICE_LIST}
            placeOrder={this.placeOrder}
            dismissOrder={this.placeOrder}
          />
        </Modal>

        <BuildControls
          price={this.state.price}
          ingredients={this.state.ingredients}
          ingAdded={this.addIngredient}
          ingRemoved={this.removeIngredient}
          postModal={this.postModal}
          dismissModal={this.dismissModal}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
