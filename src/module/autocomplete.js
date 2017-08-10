import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input'
import Results from './Results'

class Autocomplete extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
        <div className="react-autocomplete">
          <Input placeholder={this.props.placeholder}/>
          <Results list={this.props.list}/>
        </div>
    );
  }
  
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      list: PropTypes.array
    }
  }
  
  static get defaultProps() {
    return {
      placeholder: 'Placeholder',
      list: []
    }
  }
}
export default Autocomplete;
