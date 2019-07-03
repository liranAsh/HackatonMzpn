import React, { Component } from 'react';
import './App.css';
import GuardsToday from './guardsToday/GuardsTodayBox';
import MyNextGuard from './MyGuard/MyNextGuard';
import CheckList from './MyGuard/MyCheckList';

class App extends Component {
  state = {users: []};


  render() {
    return (
        <div className="App">
        <h1>Guardians of Maklef</h1>
          <GuardsToday></GuardsToday>
          {/*<MyNextGuard></MyNextGuard>*/}
          {/*<CheckList></CheckList>*/}
        </div>
    );
  }
}
export default App;