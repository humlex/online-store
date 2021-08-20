import React from "react";
import Switch from "@material-ui/core/Switch";
import useStyles from "./useStyles";

const ToggleButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.toggle_root}>
      <Switch
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </div>
  );
};

export default ToggleButton;
