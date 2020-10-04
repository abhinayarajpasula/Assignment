import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  formControl: {
    fontSize: "1.5rem",
    width: "100%",
    color: "#f0f4f8"
  },
  select: {
    width: "100%",
    textAlign: "center",
    backgroundColor: props =>
      props.value === "Working on it"
        ? "orange !important"
        : props.value === "Stuck"
        ? "red !important"
        : props.value === "Waiting for review"
        ? "blue !important"
        : props.value === "Done"
        ? "green !important"
        : props.value === "Urgent"
        ? "black !important"
        : props.value === "High"
        ? "red !important"
        : props.value === "Medium"
        ? "purple !important"
        : props.value === "Low"
        ? "navy !important"
        : "white !important",
    fontSize: "1.5rem",
    color: "inherit",

    "& > div": {
      position: "relative",
      top: "-1.2rem"
    }
  }
});

function SelectRenderer(props) {
  const classes = useStyles(props);

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        className={classes.select}
      >
        {props.statusItems.map((statusItem, index) => {
          return (
            <MenuItem value={statusItem} key={index}>
              {statusItem}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectRenderer;
