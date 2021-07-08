import React from 'react';
import BlogCard from '../Blog/BlogCard'
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
      <BlogCard/>
    </div>
  );
}

export default App;