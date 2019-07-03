import React, { Component } from 'react';
import '../App.css';

class MyNextGuard extends Component {
  
    constructor(props){
        super(props);
        this.state = {dates: [
            {
                date: "03/07/19",
                type: "ק. תורן"
            },
            {
                date: "29/07/19",
                type: "ק. תורן"
            }
        ]};
    }

  render() {
      var firstDate = this.state.dates[0];
    return (
        <div className="mynextguard">
          <h2>השמירה הבאה שלי</h2>
          <h3>{firstDate.type} ב {firstDate.date}</h3>
        </div>
    );
  }
}
export default MyNextGuard;