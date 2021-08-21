import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filter_panel_container: {
      width: "100%",
      padding: 30,
    },
    legend: {
      marginBottom: 20,
    },
    fieldset: {
      width: "100%",
    },
    checkbox_container: {
      marginLeft: 70,
    },
  })
);

export default useStyles;
