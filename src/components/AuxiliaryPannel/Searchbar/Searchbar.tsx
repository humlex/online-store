import React from "react";
import { Paper, Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./useStyles";

const Searchbar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.searchbar_container}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Type to search..."
            fullWidth={true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Searchbar;
