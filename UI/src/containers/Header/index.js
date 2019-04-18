import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { addSearchText } from "../../actions/search";

const styles = theme => ({
  root: {
    width: "100%"
  },
  submit: {
    "&:hover": {
      backgroundColor: "white"
    },
    color: "#3f51b5",
    backgroundColor: "white"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "white",
      textDecoration: "none",
      fontSize: "2rem"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 350
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  auth: {
    textDecoration: "none",
    fontSize: "1rem",
    color: "black"
  }
});

class Navigation extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    searchValue: ""
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, searchValue } = this.state;
    const { classes, cart } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <NavLink to="/login" className={classes.auth}>
          <MenuItem onClick={this.handleMenuClose}>Login</MenuItem>
        </NavLink>
        <NavLink to="/register" className={classes.auth}>
          <MenuItem onClick={this.handleMenuClose}>Register</MenuItem>
        </NavLink>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <NavLink to="/" className={classes.auth}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <p>Home</p>
          </MenuItem>
        </NavLink>
        <NavLink to="/cart" className={classes.auth}>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <p>Cart</p>
          </MenuItem>
        </NavLink>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <NavLink className={classes.title} to="/">
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                Bookomerce
              </Typography>
            </NavLink>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={searchValue}
                placeholder="Search a book title…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.changeSearchText}
              />
            </div>
            <Button
              type="button"
              className={classes.submit}
              onClick={this.handleSearchPress}
            >
              Search
            </Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <NavLink to="/" style={{ color: "white" }}>
                  <HomeIcon />
                </NavLink>
              </IconButton>

              <NavLink to="/cart" style={{ color: "white" }}>
                <IconButton color="inherit">
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NavLink>

              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }

  changeSearchText = event => {
    this.setState({ searchValue: event.target.value }, () => {
      console.log("search: ", this.state.searchValue);
    });
  };

  handleSearchPress = () => {
    const { searchValue } = this.state;
    this.props.addSearchText(searchValue);
  };
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addSearchText }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Navigation));