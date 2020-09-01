import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Cooper's Coolcast
        </div>
      </header>
      <body className="App-body">
        <div className="column-dark">
          <p style={{marginTop:10}}>
            Featured
          </p>
        </div>
        <div className="column-light">
          <p style={{marginTop:10}}>
            Episodes
          </p>
        </div>
        <div className="column-light">
          <p style={{marginTop:10}}>
            Merch
          </p>
        </div>
        <div className="column-dark">
          <p style={{marginTop:10}}>
            Cooper Scoopers
          </p>
        </div>
      </body>
      <footer className="App-footer">
        <div style={{marginTop:50}}>
          About us
        </div>
      </footer>
    </div>
  );
}

export default App;
