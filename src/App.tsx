import React from 'react';
import Sidebar from './Sidebar/Sidebar'
import Native from './Examples/Native/Native'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App__content">
        <Native />
      </div>
    </div>
  );
}

export default App;
