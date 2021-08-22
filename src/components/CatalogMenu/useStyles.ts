import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: 200,
      height: 200,
      position: "absolute",
      zIndex: 10,
      top: 50,
      right: 170,
      borderRadius: 15,
      padding: 20,
    },
    clear_btn: {},
  })
);

export default useStyles;
