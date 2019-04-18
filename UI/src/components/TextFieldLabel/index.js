import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const TextFieldLabel = props => {
  const { required, text, value, onChange, id, multiline } = props;
  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor="email">{text}</InputLabel>
      <Input
        value={value}
        multiline={multiline}
        onChange={onChange}
        id={id}
        autoFocus
      />
    </FormControl>
  );
};

TextFieldLabel.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,

  required: PropTypes.bool,
  multiline: PropTypes.bool
};

TextFieldLabel.defaultProps = {
  required: false,
  multiline: false
};

export default TextFieldLabel;
