import React from 'react';
import './App.scss';
import ProductContent from '../../containers/ProductContent';

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
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <ProductContent/>
    </div>
  );
}

export default App;