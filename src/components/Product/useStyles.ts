import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid_item: {
      width: 1300,
      position: "relative",
    },
    image: {
      height: 400,
    },
    name: {
      textAlign: "center",
      marginBottom: 20,
    },
    product_card: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    card_button: {
      padding: 10,
    },
    delete_btn: {
      color: "#ff0000",
      position: "absolute",
      top: 20,
      right: 20,
      backgroundColor: "#ececec",
    },
  })
);

export default useStyles;
