import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar'
import Native from './Examples/Native/Native'
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Sidebar />
        <div className="App__content">
          <Switch>
            <Route path="/native">
              <Native />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
