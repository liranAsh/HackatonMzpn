import React, { Component } from 'react';
import '../App.css';
import GuardsList from './GuardsList';

class GuardsToday extends Component {
  
  render() {
    return (
        <div className="guardstodaybox">
          <h2>שומרים היום</h2>
          <GuardsList headline="יורדים"></GuardsList>
          <GuardsList headline="עולים"></GuardsList>
        </div>
    );
  }
}
export default GuardsToday;