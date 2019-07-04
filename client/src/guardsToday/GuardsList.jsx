import React, { Component, Fragment } from 'react';
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
      this.dates = {
          "עולים": "today",
          "יורדים": "yesterday"
      }
  }

  render() {
      const guards = this.state.guards[this.dates[this.props.headline]]
    return (
        <div >
          <h3>{this.props.headline}</h3>
          {guards && guards.length && guards.map((guard, index) =>
              <Fragment key={guard.id}>
                  <div>{guard.type}: {guard.name}</div>
                  <div>{guard.phone}</div>
                  {this.state.guards.length - 1 !== index && <br/>}
              </Fragment>

          )}
        </div>
    );
  }
}
export default GuardsList;