import React, { Component } from 'react';
import IngredientsComponent from '../components/Ingredients';
import { fetchIngredients } from '../pizza-service';


class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      priceIngredients: null,
      checked: false,
    };
    this.handleCheckBoxButtonClick = this.handleCheckBoxButtonClick.bind(this);

  }

  componentDidMount() {
    const price = parseInt(window.localStorage.getItem('item'));
    let ingredients = JSON.parse(window.localStorage.getItem('ingredients'));
    if (!ingredients) {
      ingredients = fetchIngredients();
    }
    this.setState({
      priceIngredients: price,
      ingredients,
    });

    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        this.setState({ checked: true });
        break;
      }
    }
  }

  handleCheckBoxButtonClick(e, price, id) {
    let ingredients = this.state.ingredients;
    let addPrice;
    if (e.target.checked) {
      addPrice = this.state.priceIngredients + price;
    } else {
      addPrice = this.state.priceIngredients - price;
    }
    this.setState({ priceIngredients: addPrice });

    ingredients = ingredients.map((item) => {
      if(item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });

    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].checked) {
        this.setState({ checked: true });
        break;
      }
    }

    window.localStorage.setItem('item', JSON.stringify(addPrice));
    window.localStorage.setItem('ingredients', JSON.stringify(this.state.ingredients));
  }

  render() {
    const { ingredients, checked, priceIngredients } = this.state;
    return (
      <IngredientsComponent
        ingredients={ingredients}
        checked={checked}
        priceIngredients={priceIngredients}
        handleChange={this.handleCheckBoxButtonClick}
      />
    );
  }
}

export default Ingredients;

