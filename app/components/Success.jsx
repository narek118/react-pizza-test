import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function Success() {
  window.localStorage.clear();
  return (
    <Grid item xs={12}>
      <h3>Success</h3>
      <Link to="/">
        <span>
          <Button variant="contained" color="primary">
            <span className="order-button">Home</span>
          </Button>
        </span>
      </Link>
    </Grid>
);
}
