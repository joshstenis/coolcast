import React from 'react';
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
        <div className="column-dark" onClick={Featured}>
          <p style={{marginTop:10}}>
            Featured
          </p>
        </div>
        <div className="column-light" onClick={Episodes}>
          <p style={{marginTop:10}}>
            Episodes
          </p>
        </div>
        <div className="column-light" onClick={Merch}>
          <p style={{marginTop:10}}>
            Merch
          </p>
        </div>
        <div className="column-dark" onClick={Members}>
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

function Featured() {
  return (
    <div className="Featured">
      <header className="Feat-header">
        <div>
          Featured
        </div>
      </header>
      <body className="Feat-body">
        <div>
          Featured content, New episodes, Mini games, Etc.
        </div>
      </body>
    </div>
  );
}

function Episodes() {
  return (
    <div className="Episodes">
      <header className="Epi-header">
        <div>
          Episodes
        </div>
      </header>
      <body className="Epi-body">
        <div>
          Every episode organized probably by season
        </div>
      </body>
    </div>
  );
}

function Merch() {
  return (
    <div className="Merch">
      <header className="Merch-header">
        <div>
          Merch
        </div>
      </header>
      <body className=" Merch-body">
        <div>
          Merch for Cooper's CoolCast
        </div>
      </body>
    </div>
  );
}

function Members() {
  return (
    <div className="Members">
      <header className="Mem-header">
        <div>
          Members
        </div>
      </header>
      <body className="Mem-body">
        <div>
          A place for people to donate and subscribe to patreon and such
        </div>
      </body>
    </div>
  );
}

export default App;