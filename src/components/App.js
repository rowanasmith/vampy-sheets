import React from "react";
// import '../styles/App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from "./Home";
import Attributes from "./Attributes"
import Biography from "./Biography";


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
            <Route
              exact
              path="/attributes"
              component={Attributes}
            />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
