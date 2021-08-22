import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      margin: "15% auto",
      padding: 15,
    },
    title: {
      fontSize: 20,
      marginBottom: 30,
    },
    grid: {
      height: 65,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    error: {
      position: "absolute",
      bottom: 0,
      color: "#ff0000",
      fontSize: 12,
    },
  })
);

export default useStyles;
