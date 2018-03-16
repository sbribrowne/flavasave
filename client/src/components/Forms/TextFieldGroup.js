import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div
      className={classnames("form-group", {
        "has-error": error
      })}
    >
      <label htmlFor="control-label">{label}</label>
      <input
        type={type}
        className="form-control"
        name={field}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-white">{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
