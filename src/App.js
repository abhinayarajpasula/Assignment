import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import WorkspaceList from "./components/WorkspaceList/WorkspaceList";
import WorkspaceItem from "./components/WorkspaceItem/WorkspaceItem";
import classes from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Navigation />
        <WorkspaceList />
        <WorkspaceItem />
      </div>
    </BrowserRouter>
  );
}

export default App;
