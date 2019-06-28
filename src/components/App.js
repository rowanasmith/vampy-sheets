import React from "react";
// import '../styles/App.css';
import Biography from "./Biography";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          <Route
              exact
              path="/home"
              component={Home}
            />
          <Route
              exact
              path="/biography"
              component={Biography}
            />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
