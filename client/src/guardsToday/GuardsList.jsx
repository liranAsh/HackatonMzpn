import React, { Component } from 'react';
import '../App.css';
class GuardsList extends Component {
  
  constructor(props){
    super(props);
    this.state = {guards: [
      {
        id:1,
        type: "מ. תורן",
        name: "רועי תורן"
      },
      {
        id:2,
        type:"ק. תורן",
        name: "נעה סברנסקי"
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
        <div >
          <h3>{this.props.headline}</h3>
          {this.state.guards.map(guard =>
              <div key={guard.id}>{guard.type} : {guard.name}</div>
          )}
        </div>
    );
  }
}
export default GuardsList;