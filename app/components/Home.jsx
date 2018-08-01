import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Grid item xs={12}>
      <h3>Click to button to give us the details</h3>
      <Link to="/pizzatype">
        <Button variant="contained" color="primary">
          <span className="order-button">Order</span>
        </Button>
      </Link>
    </Grid>
  );
}
