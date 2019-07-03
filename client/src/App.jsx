import React, { Component } from 'react';
import './App.css';
import GuardsToday from './guardsToday/GuardsTodayBox';
import MyNextGuard from './MyGuard/MyNextGuard';

class App extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
  }

  render() {
    return (
        <div className="App">
        ``<h1>Guardians of Maklef</h1>
          <GuardsToday></GuardsToday>
          <MyNextGuard></MyNextGuard>

        </div>
    );
  }
}
export default App;