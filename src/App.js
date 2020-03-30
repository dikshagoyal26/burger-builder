import React from 'react';
import './App.css';
import Burger from './components/burger'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
        <Burger></Burger>
      </header>
    </div>
  );
}

export default App;
