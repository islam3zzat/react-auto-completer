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

export default Autocomplete;
