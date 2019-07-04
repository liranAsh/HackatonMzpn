import React, { Component } from 'react';
import './App.css';
import GuardsToday from './guardsToday/GuardsTodayBox';
import MyNextGuard from './MyGuard/MyNextGuard';
import CheckList from './MyGuard/MyCheckList';

class App extends Component {
  state = {users: []};
  render() {
    return (
        <div className="App" style={{direction: 'rtl'}}>
        <h1>Guardians of Maklef</h1>
          <GuardsToday></GuardsToday>

            <div> יכולים לבקר אותנו גם כאן, ה-אתר לתהליכים בירוקרטיים בצבא:</div>
            <a href={'https://idf-workflows.netlify.com'} target="_blank">
                <img src="https://www.k2.com/img/140/tenet_workflow.svg" style={{cursor: 'pointer',width: '5em', height: '5em', background: 'white', borderRadius: '5em', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'  }}/>
            </a>
          {/*<MyNextGuard></MyNextGuard>*/}
          {/*<CheckList></CheckList>*/}
        </div>
    );
  }
}
export default App;