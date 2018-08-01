import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
    };
  }


  render() {
    return (
      <div>
        <Grid container spacing={8} className="text-center">
          <Grid item xs={12}>
            <h1>PIZZA ORDERING</h1>
          </Grid>
          <Routes />
        </Grid>
      </div>
    );
  }
}

export default withRouter(App);
