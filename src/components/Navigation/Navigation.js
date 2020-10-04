import React from "react";
// import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faBell,
  faCalendar,
  faUserPlus,
  faSearch,
  faQuestion,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import classes from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faAtlassian} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faBell} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faDownload} size="2x" />
        </div>
      </div>
      <div className={classes.rotate}>
        <Button variant="cta">Upgrade</Button>
      </div>
      <div className={classes.alignColumnCenter}>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faUserPlus} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faQuestion} size="2x" />
        </div>
        <div className={classes.mb3}>
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
