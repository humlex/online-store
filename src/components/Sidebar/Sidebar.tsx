import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./useStyles";

type ReduxStateType = {
  AccountReducer: {
    role: string;
  };
};

const Sidebar = () => {
  const classes = useStyles();
  const role = useSelector(
    (state: ReduxStateType) => state.AccountReducer.role
  );
  const anchor = "left";
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  return (
    <div>
      <React.Fragment key={anchor}>
        <MenuIcon onClick={() => toggleDrawer(true)} />
        <Drawer
          anchor={anchor}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          <div role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
              <ListItem button>
                <ListItemText>Navigation pannel</ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List className={classes.list}>
              <Link to="/">
                <ListItem button>Home</ListItem>
              </Link>
              <Link to="/catalog">
                <ListItem button>Catalog</ListItem>
              </Link>
              {role === "admin" ? (
                <Link to="/add_product">
                  <ListItem button>Create product</ListItem>
                </Link>
              ) : (
                <Link to="/access_error">
                  <ListItem button>Create product</ListItem>
                </Link>
              )}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
