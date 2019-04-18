import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        address: "",
        phoneNr: ""
      }
    };
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    const { email, password, address, phoneNr } = user;

    return (
      <main className={classes.main}>
        <Typography component="h1" variant="h5">
          Register new account
        </Typography>
        <form className={classes.form}>
          <TextFieldLabel
            required
            text={"Email Address"}
            value={email}
            onChange={this.changeTextfield}
            id={"email"}
          />
          <TextFieldLabel
            required
            text={"Password"}
            value={password}
            onChange={this.changeTextfield}
            id={"password"}
          />
          <TextFieldLabel
            multiline
            text={"Address"}
            value={address}
            onChange={this.changeTextfield}
            id={"address"}
          />
          <TextFieldLabel
            text={"Phone number"}
            value={phoneNr}
            onChange={this.changeTextfield}
            id={"phoneNr"}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.submitForm}
          >
            Register
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

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
