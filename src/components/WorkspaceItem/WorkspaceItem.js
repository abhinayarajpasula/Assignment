import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faPlug,
  faCashRegister,
  faUserFriends,
  faEllipsisH,
  faTable,
  faChevronDown,
  faEyeSlash,
  faSortAmountUp,
  faStar,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./WorkspaceItem.module.scss";
import dataListWebdesign from "../../dataListWebdesign";
import dataListOther from "../../dataListOther";
import GridList from "../GridList/GridList";

function WorkspaceItem() {
  const location = useLocation();

  const dataList =
    location.pathname === "/other" ? dataListOther : dataListWebdesign;

  return (
    <div className={classes.container}>
      <div className={classes.flex1}>
        <div>
          <div className={classes.flexRow}>
            <h1 className="mb1 mr1">
              <Switch>
                <Route path="/other">Other</Route>
                <Route path="/" exact>
                  Web Design
                </Route>
              </Switch>
            </h1>
            <FontAwesomeIcon
              icon={faStar}
              className={classes.star}
              color="lightgrey"
            />
          </div>
          <p className="normalText lightFont">Add board description</p>
        </div>
        <div className={classes.flex2}>
          <div className={classes.alignSelfCenter}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </div>
          <div className={`${classes.plug} ${classes.center}`}>
            <FontAwesomeIcon icon={faPlug} size="2x" />
            <span className="normalText lightFont">{"/0"}</span>
          </div>
          <div className={`${classes.plug} ${classes.center}`}>
            <FontAwesomeIcon icon={faCashRegister} size="2x" />
            <span className="normalText lightFont">{"/0"}</span>
          </div>
          <Button variant="outlined">
            <FontAwesomeIcon icon={faVideo} className="mr1" />
            Start Zoom call
          </Button>
          <div className={classes.flex3}>
            <div className="mr1">
              <FontAwesomeIcon icon={faUserFriends} size="2x" />
              <span className="normalText lightFont">{"/1"}</span>
            </div>
            <div>
              <span className="normalText lightFont">Activities</span>
              <span className="normalText lightFont">{"/0"}</span>
            </div>
          </div>
          <div className={classes.alignSelfCenter}>
            <FontAwesomeIcon icon={faEllipsisH} size="2x" />
          </div>
        </div>
      </div>
      <div className={classes.flex4}>
        <div className={classes.flex5}>
          <div className="mr1">
            <FontAwesomeIcon icon={faTable} size="2x" />
          </div>
          <p className="mr1 normalText">Main Table</p>
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className={classes.flex6}>
          <Button>New Item</Button>
          <Input type="text" placeholder="Search / Filter Board" />
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
          <FontAwesomeIcon icon={faEyeSlash} size="2x" />
          <FontAwesomeIcon icon={faSortAmountUp} size="2x" />
        </div>
      </div>
      <hr className="mt1 mb2" />
      <GridList dataList={dataList} key={window.location.pathname} />
    </div>
  );
}

export default WorkspaceItem;
