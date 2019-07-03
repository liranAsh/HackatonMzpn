import React, { Component } from 'react';
import '../App.css';
import GuardsList from './GuardsList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class GuardsToday extends Component {

  render() {
    return (
        <Paper style={styles.card}>
          <div style={styles.titleSection}>
            <h1 style={styles.title}>שומרים היום</h1>
          </div>
          <div style={styles.cardContent}>
            <GuardsList headline="עולים"></GuardsList>
            <GuardsList headline="יורדים"></GuardsList>
          </div>
        </Paper>
    );
  }
}

const styles = 
{
  card: {
    margin: '0 auto',
    borderRadius: 16,
    width: '50%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontFamily: 'gisha',
    textAlign: 'center',
  },
  titleSection: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    textAlign: 'center',
    height: '20%',
    backgroundColor: '#ff5722',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContent: {
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
  }
};

export default GuardsToday;