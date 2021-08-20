import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toggle_root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
