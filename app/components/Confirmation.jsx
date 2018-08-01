import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Price from '../containers/Price';


export default function Confirmation() {
  return (
    <Grid item xs={12}>
      <h3>Confirm your order</h3>
      <Price />
      <Link to="/ingredients">
        <Button variant="contained" color="primary">
          <span className="order-button">Back</span>
        </Button>
      </Link>
      <Link to="/success">
        <Button variant="contained" color="primary">
          <span className="order-button">Finish</span>
        </Button>
      </Link>
    </Grid>
  );
}
