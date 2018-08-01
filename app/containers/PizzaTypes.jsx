import React, {Component} from 'react';
import PizzaTypesComponent from '../components/PizzaTypes';
import {fetchDoughTypes} from '../pizza-service';


class PizzaTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      type: null,
    };
    this.handleRadioButtonClick = this.handleRadioButtonClick.bind(this);
  }

  componentDidMount() {
    const types = fetchDoughTypes();
    this.setState({
      types,
    });
    const type = window.localStorage.getItem('type');
    if(type) {
      this.setState({
        type,
      });
    }
  }

  handleRadioButtonClick(id) {
    this.setState({ type: id }, () => {
      if (this.state.type === '1') {
        window.localStorage.setItem('item', 5);
      }
      if (this.state.type === '2') {
        window.localStorage.setItem('item', 7);
      }
      window.localStorage.setItem('type', this.state.type);
    });
  }

  render() {
    const { types, type } = this.state;
    return (
      <PizzaTypesComponent types={types} handleChange={this.handleRadioButtonClick} type={type} />
    );
  }
}

export default PizzaTypes;

