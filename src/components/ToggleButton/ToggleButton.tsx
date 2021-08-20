import React from "react";
import Switch from "@material-ui/core/Switch";
import useStyles from "./useStyles";
import { useSelector, useDispatch } from "react-redux";
import { ADMIN_MODE, USER_MODE } from "../../redux/AccountMode/actions";

type ReduxStateType = {
  AccountReducer: {
    role: string;
  };
};

const ToggleButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const setAdminMode = () => dispatch({ type: ADMIN_MODE });
  const setUserMode = () => dispatch({ type: USER_MODE });
  const role = useSelector(
    (state: ReduxStateType) => state.AccountReducer.role
  );
  return (
    <div
      className={classes.toggle_root}
      onClick={role === "admin" ? setUserMode : setAdminMode}
    >
      <Switch
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </div>
  );
};

export default ToggleButton;
