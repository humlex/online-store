import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      margin: "3% auto",
    },
    table: {
      minWidth: 650,
    },
    image: {
      width: 150,
      height: 150,
    },
  })
);

export default useStyles;
