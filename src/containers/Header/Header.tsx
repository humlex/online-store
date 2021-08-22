import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  ClickAwayListener,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import ToggleButton from "../../components/ToggleButton";
import Logo from "../../components/Logo";
import useStyles from "./useStyles";
import Sidebar from "../../components/Sidebar";
import CatalogMenu from "../../components/CatalogMenu";

type Product = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

type ReduxStateType = {
  AccountReducer: {
    role: string;
  };
  CatalogReducer: {
    products: Product[];
  };
};

const Header = () => {
  const classes = useStyles();
  const role = useSelector(
    (state: ReduxStateType) => state.AccountReducer.role
  );
  const catalogItems = useSelector(
    (state: ReduxStateType) => state.CatalogReducer.products
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openCatalog, setOpenCatalog] = React.useState<boolean>(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenCatalog = () => {
    setOpenCatalog(!openCatalog);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Catalog</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {role === "admin" ? (
          <Typography className={classes.role}>Admin</Typography>
        ) : (
          <Typography className={classes.role}>User</Typography>
        )}
      </MenuItem>
      <MenuItem className={classes.toggle_mobile}>
        <ToggleButton />
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Sidebar />
            </IconButton>
            <Logo />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={handleOpenCatalog}>
                <Badge
                  badgeContent={catalogItems.length}
                  color="secondary"
                  invisible={catalogItems.length === 0}
                >
                  <ClickAwayListener onClickAway={() => setOpenCatalog(false)}>
                    <ShoppingCartIcon />
                  </ClickAwayListener>
                </Badge>
              </IconButton>
              <ToggleButton />
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                {role === "admin" ? (
                  <Typography className={classes.role}>Admin</Typography>
                ) : (
                  <Typography className={classes.role}>User</Typography>
                )}
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      {openCatalog && <CatalogMenu />}
    </>
  );
};

export default Header;
