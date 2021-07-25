import React from 'react';
import './App.scss';
// import BlogMainContent from '../../containers/BlogMainContent';
import BlogContainer from '../../containers/BlogContainer/BlogContainer';

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
      <BlogContainer/>
    </div>
  );
}

export default App;