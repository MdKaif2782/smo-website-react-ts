import React from 'react';
import './App.css';
import pepe from './pepe.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <p>
          <code>UI</code> er Kaj choltese vai wait koren
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
    </div>
  );
}

export default App;
