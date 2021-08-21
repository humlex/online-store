import React, { useState } from "react";
import {
  Paper,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import useStyles from "./useStyles";

const FilterPannel = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    apple: true,
    xiaomi: false,
    oneplus: false,
    samsung: true,
    asus: false,
    vivo: false,
  });

  const { apple, xiaomi, oneplus, samsung, asus, vivo } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Paper className={classes.filter_panel_container}>
      <FormControl component="fieldset" className={classes.fieldset}>
        <FormLabel component="legend" className={classes.legend}>
          Pick model
        </FormLabel>
        <FormGroup className={classes.checkbox_container}>
          <FormControlLabel
            control={
              <Checkbox checked={apple} onChange={handleChange} name="apple" />
            }
            label="Apple"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={xiaomi}
                onChange={handleChange}
                name="xiaomi"
              />
            }
            label="Xiaomi"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={oneplus}
                onChange={handleChange}
                name="oneplus"
              />
            }
            label="OnePlus"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={samsung}
                onChange={handleChange}
                name="samsung"
              />
            }
            label="Samsung"
          />
          <FormControlLabel
            control={
              <Checkbox checked={asus} onChange={handleChange} name="asus" />
            }
            label="Asus"
          />
          <FormControlLabel
            control={
              <Checkbox checked={vivo} onChange={handleChange} name="vivo" />
            }
            label="Vivo"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  );
};

export default FilterPannel;
