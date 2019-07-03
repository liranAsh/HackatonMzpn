import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
class GuardsList extends Component {

  componentDidMount() {
    axios.get('/request/guards')
        .then(guards => {
          console.log("guards", guards.data);
          this.setState({ ...guards.data })
        });
  }
  constructor(props){
    super(props);
    this.state = {guards: []};
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
              <div key={guard.id}>{guard.type}: {guard.name}</div>
          )}
        </div>
    );
  }
}
export default GuardsList;