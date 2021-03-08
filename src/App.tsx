import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  RouteProps
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group'
import Sidebar from './Sidebar/Sidebar'
import Native from './Examples/Native/Native'
import TransitionGroup from './Examples/TransitionGroup/TransitionGroup'
import './App.css';

interface HashRouteProps extends RouteProps {
  hash: string
}

const HashRoute: React.FC<HashRouteProps> = ({ hash, ...routeProps }) => {
  return (
    <Route
      render={({ location }) => {
        const shouldRender = location.hash === `#${hash}`

        return <CSSTransition
          in={shouldRender}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page">

            { shouldRender && <Route {...routeProps} /> }
          </div>
        </CSSTransition>
      }} />
  )
}

function App() {
  return (
    <Router basename='react-animations'>
      <div className="App">
        <Sidebar />
        <div className="App__content">
          <HashRoute hash="native">
            <Native />
          </HashRoute>
          <HashRoute hash="transition-group">
            <TransitionGroup />
          </HashRoute>
        </div>
      </div>
    </Router>
  );
}

export default App;
