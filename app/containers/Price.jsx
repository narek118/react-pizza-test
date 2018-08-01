import React, {Component} from 'react';
import PizzaTypesComponent from '../components/PizzaTypes';


class PizzaTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }

  componentDidMount() {
    const price = window.localStorage.getItem('item');
    this.setState({
      price,
    });
  }

  render() {
    const { price } = this.state;
    return (
      <h2>Your price is {price}€</h2>
    );
  }
}

export default PizzaTypes;

