import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchbar_container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      paddingTop: 50,
      paddingBottom: 70,
      paddingRight: 50,
      paddingLeft: 30,
    },
  })
);

export default useStyles;
