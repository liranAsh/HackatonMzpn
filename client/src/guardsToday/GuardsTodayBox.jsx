import React, { Component } from 'react';
import '../App.css';
import GuardsList from './GuardsList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class GuardsToday extends Component {

  render() {
    return (
        <Paper style={styles.card}>
          <Typography variant="h5" component="h3">
            שומרים היום
          </Typography>
          <GuardsList headline="יורדים"></GuardsList>
          <GuardsList headline="עולים"></GuardsList>
        </Paper>
    );
  }
}

const styles = 
{
  card: {
    margin: '0 auto',
    padding: 16,
    borderRadius: 16,
    width: '50%',
    height: 'auto'
  }
};

export default GuardsToday;