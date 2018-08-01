import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import PizzaTypes from './containers/PizzaTypes';
import Ingredients from './containers/Ingredients';
import Confirmation from './components/Confirmation';
import Success from './components/Success';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pizzaType" component={PizzaTypes} />
    <Route path="/ingredients" component={Ingredients} />
    <Route path="/confirmation" component={Confirmation} />
    <Route path="/success" component={Success} />
  </Switch>
);

export default Routes;
