import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


class PizzaTypesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {types, handleChange, type} = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <h3>Choose your type</h3>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label='Pizza type'
              key="Pizza type"
              value={`${type}`}
              name="Pizza"
              onChange={e => {
                handleChange(e.target.value)
              }
              }
            >
              {types.map(item => (
                <FormControlLabel
                  value={`${item.id}`}
                  key={`${item.id}`}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>

          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">
            <span>
              <Button variant="contained" color="primary">
                <span className="order-button">Back</span>
              </Button>
            </span>
          </Link>
          <Link to="/ingredients">
            <span>
              <Button variant="contained" color="primary" disabled={!type}>
                <span className="order-button">Next</span>
              </Button>
            </span>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

PizzaTypesComponent.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default PizzaTypesComponent;
