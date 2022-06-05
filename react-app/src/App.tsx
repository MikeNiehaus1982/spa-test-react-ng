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
              <Link to="/react/image">Image</Link>
            </li>
            <li>
              <Link to="/react/gdataimage">G DATA Image</Link>
            </li>
            <li>
              <Link to="/react/dukenukemminigame">Duke Nukem Minigame</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/gdataimage">
            <GDataImage />
          </Route>
          <Route path="/react/dukenukemminigame">
            <DukeNukemMiniGame />
          </Route>
          <Route path="/react/image">
            <Image />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Image() {
  return (
    <div>
      <img src="https://create-react-app.dev/img/logo-og.png" width="100%" height="100%"></img>
    </div>
  )
}

function GDataImage() {
  return (
    <div>
      <img src="https://www.gdata.de/fileadmin/web/general/images/wallpaper/MeineDaten_Screen_1920x1080_Logo.jpg" width="100%" height="100%"></img>
    </div>
  )
}

function DukeNukemMiniGame() {
  return (
      <iframe src="https://archive.org/embed/DukeNukem" width="560" height="384"></iframe>
  )
  //return <h2>Users</h2>;
}
