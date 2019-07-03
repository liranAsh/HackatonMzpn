import React, { Component } from 'react';
import '../App.css';
class CheckList extends Component {
  
  constructor(props){
    super(props);
    this.state = {items: [
      {
        id:1,
        name: "מדי ה",
        value: false
      },
      {
        id:2,
        name: "מצעים",
        value: false
      },
      {
        id:3,
        name: "בננה ורצועה",
        value: false
      },
      {
        id:4,
        name: "טופס נשק",
        value: false
      },
      {
        id:5,
        name: "כלי רחצה",
        value: false
      }
      
    ]};
  }

  // componentDidMount() {
  //   fetch('/guards/' + '030719')
  //       .then(res => res.json())
  //       .then(guards => this.setState({ guards }));
  // }

  render() {
    return (
        <div className="mychecklist">
          <h3>באתי מוכן</h3>
          {this.state.items.map(item =>
              <div key={item.id}>
                <label>{item.name}</label>
                <input type="checkbox"></input>
              </div>
          )}
        </div>
    );
  }
}
export default CheckList;