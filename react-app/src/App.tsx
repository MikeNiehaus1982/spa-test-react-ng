import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DukeNukemMiniGame from "./DukeNukemMiniGame";

const css = `
.navbarReact {
  position: fixed;
  top:75px;
  left: 0;
  background-color: black;
  color: white;
  font-family: 'Arial Narrow Bold',sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
}

.navbarReact ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  height: 100%;
}

.navbarReact li {
  padding-right: 24px;
  height: 100%;
}

.navbarReact li:hover {
  opacity: 0.8;
  color:white;
}

.navbarReact a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}`;

export default function App({ name }) {
  return (
    <Router>
      <div>
        <style>{css}</style>
        <div className="navbarReact">
          <ul>
            <li>
              <Link to="/react/reactimage">React Image</Link>
            </li>
            <li>
              <Link to="/react/gdataimage">G DATA Image</Link>
            </li>
            <li>
              <Link to="/react/dukenukemminigame">Duke Nukem Minigame</Link>
            </li>
          </ul>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/gdataimage">
            <GDataImage />
          </Route>
          <Route path="/react/dukenukemminigame">
            <DukeNukemMiniGame />
          </Route>
          <Route path="/react/reactimage">
            <ReactImage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function ReactImage() {
  return (
    <div>
      <img
        src="https://create-react-app.dev/img/logo-og.png"
        width="100%"
        height="100%"
      ></img>
    </div>
  );
}

function GDataImage() {
  return (
    <div>
      <img
        src="https://www.gdata.de/fileadmin/web/general/images/wallpaper/MeineDaten_Screen_1920x1080_Logo.jpg"
        width="100%"
        height="100%"
      ></img>
    </div>
  );
}
