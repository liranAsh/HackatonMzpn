import React, { Component } from 'react';
import '../App.css';
import GuardsList from './GuardsList';

class GuardsToday extends Component {
  
  render() {
    return (
        <div className="guardstodaybox">
          <h1>שומרים היום</h1>
          <GuardsList headline="יורדים"></GuardsList>
          <GuardsList headline="עולים"></GuardsList>
        </div>
    );
  }
}
export default GuardsToday;