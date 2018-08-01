import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class IngredientsComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {ingredients, checked, priceIngredients, handleChange} = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <h3>Choose your ingredients</h3>
          <FormControl component="fieldset">
            <FormLabel component="legend">Assign ingredients</FormLabel>
            <FormGroup>
              {ingredients.map(item => (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      checked={item.checked}
                      onChange={e => handleChange(e, item.price, item.id)}
                      value={item.name}
                    />
                  }
                  label={item.name}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Link to="/pizzaType">
            <span>
              <Button variant="contained" color="primary">
                <span className="order-button">Back</span>
              </Button>
            </span>
          </Link>
          <Link to="/confirmation">
            <span>
              <Button variant="contained" color="primary" disabled={checked === false}>
                <span className="order-button">Next</span>
              </Button>
            </span>
          </Link>
        </Grid>
      </Grid>
    );
  }
}
