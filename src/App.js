import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import findCampus from './Pages/findCampus'


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/findCampus">
            <findCampus />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
