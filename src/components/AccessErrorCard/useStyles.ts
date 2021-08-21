import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    access_error_card: {
      position: "relative",
      width: "50%",
      height: "40vh",
      backgroundColor: "#f5f2f2",
      margin: "10% auto",
    },
    smile: {
      width: 150,
      height: 150,
    },
    error: {
      fontSize: 40,
      textAlign: "center",
      color: "#808080",
    },
    link: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bottom: 20,
      right: 20,
      fontSize: 20,
      color: "#808080",
    },
  })
);

export default useStyles;
