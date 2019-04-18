import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import TextFieldLabel from "./../../components/TextFieldLabel";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: "#3f51b5"
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    const { email, password } = user;

    return (
      <main className={classes.main}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form}>
          <TextFieldLabel
            text={"Email Address"}
            value={email}
            onChange={this.changeTextfield}
            id={"email"}
          />
          <TextFieldLabel
            text={"Password"}
            value={password}
            onChange={this.changeTextfield}
            id={"password"}
          />
          <div style={{ marginTop: 5 }}>
            <span>Do not have an account? Create one </span>
            <span>
              <NavLink style={{ color: "blue" }} to="/register">
                here
              </NavLink>
            </span>
            <span>.</span>
          </div>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.submitForm}
          >
            Login
          </Button>
        </form>
      </main>
    );
  }

  changeTextfield = event => {
    const { user } = this.state;
    const userCpy = Object.assign({}, user);
    userCpy[event.target.id] = event.target.value;

    this.setState(
      {
        user: userCpy
      },
      () => {
        console.log("user after update: ", user);
      }
    );
  };

  submitForm = () => {
    console.log("user at submit: ", this.state.user);
  };
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
