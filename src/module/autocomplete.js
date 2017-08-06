import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends Component {
  render() {
    return (
      <div className="Autocomplete">
        <input placeholder={this.props.placeholder} type="text"/>
      </div>
  );
  }
}
Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  api: PropTypes.string,
  param: PropTypes.string,
  method: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  resetOnSelect: PropTypes.bool,
  path: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  optionsClass: String,
  optionClass: String,
  inputClass: String,
};
Autocomplete.defaultProps = {
  placeholder: 'Placeholder',
  api: 'Placeholder',
  param: 'q',
  method: 'GET',
  closeOnSelect: true,
  resetOnSelect: true,
  path: null,
  optionsStyles: null,
  optionStyles: null,
  inputStyles: null,
  optionsClass: String,
  optionClass: String,
  inputClass: String,
};

export default Autocomplete;
