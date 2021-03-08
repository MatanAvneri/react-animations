import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps
} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar'
import Native from './Examples/Native/Native'
import './App.css';

interface HashRouteProps extends RouteProps {
  hash: string
}

const HashRoute: React.FC<HashRouteProps> = ({ hash, ...routeProps }) => (
  <Route
    render={({ location }) => (
      (location.hash === `#${hash}`) && <Route {...routeProps} />
    )}
  />
);

function App() {
  return (
    <Router basename='react-animations'>
      <div className="App">
        <Sidebar />
        <div className="App__content">
          <Switch>
            <HashRoute hash="native">
              <Native />
            </HashRoute>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
