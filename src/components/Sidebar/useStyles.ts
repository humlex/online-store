import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
      userSelect: "none",
      textDecoration: "none",
      "&:focus, &:hover, &:visited, &:link, &:active": {
        color: "#fff",
      },
    },
    fullList: {
      width: "auto",
    },
  })
);

export default useStyles;
