import React from 'react';
import LeaveAmessave from '../LeaveAmessave/LeaveAmessave';
import './App.scss';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LeaveAmessave/>
    </div>
  );
}

export default App;