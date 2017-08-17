import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input'
import Results from './Results'

class Autocomplete extends Component {
  render() {
    return (
        <div className="react-autocomplete">
          <Input placeholder={this.props.placeholder}/>
          <Results list={this.props.list}/>
        </div>
    );
  }
  
  /**
   * defines proptypes
   * @return {{placeholder: *, list: *}}
   */
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      list: PropTypes.array
    }
  }
  
  /**
   * sets default proptypes
   * @return {{placeholder: string, list: Array}}
   */
  static get defaultProps() {
    return {
      placeholder: 'Placeholder',
      list: []
    }
  }
}
export default Autocomplete;
