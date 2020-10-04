import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSortDown,
  faHome,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

import classes from "./WorkspaceList.module.scss";

function WorkspaceList() {
  return (
    <div className={classes.container}>
      <div>
        <div className="mb2 pl2 pr2">
          <h2>Workspaces</h2>
        </div>
        <div className="mb2 pl2 pr2">
          <FontAwesomeIcon icon={faSearch} className="mr1" size="2x" />
          <span className="normalText lightFont">Filter Boards...</span>
        </div>
        <div className={classes.rowSpaceBetween}>
          <div className={classes.flexRow}>
            <div className="mr1">
              <FontAwesomeIcon icon={faSortDown} size="2x" />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faHome}
                className="mr05"
                size="2x"
                color="#f76a8c"
              />
              <span className="normalText">Main</span>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faPlusCircle} size="2x" />
          </div>
        </div>
        <Link to="/">Web design</Link>
        <Link to="/other">Other</Link>
      </div>
      <div>
        <p className="bt1 bb1 pt2 pb2 pl1 normalText">Dashboards</p>
        <div className={classes.rowSpaceEvenly}>
          <p className="normalText">Get the mobile app</p>
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />
          <FontAwesomeIcon icon={faApple} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default WorkspaceList;
