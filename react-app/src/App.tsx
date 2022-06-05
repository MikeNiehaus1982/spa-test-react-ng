import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App({ name }) {
  return (
    <Router>
      <div>
        <p>{name}</p>
        <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/about">About</Link>
            </li>
            <li>
              <Link to="/react/users">Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/about">
            <About />
          </Route>
          <Route path="/react/users">
            <Users />
          </Route>
          <Route path="/react">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <img src="https://create-react-app.dev/img/logo-og.png" width="100%" height="100%"></img>
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
