import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './component/Input'
import Results from './component/Results'
import Wrapper from './styled/Wrapper'
import debounce from 'lodash.debounce'

class Autocomplete extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      options: props.source
    }
    this.getData = debounce(this.getData, 300)
  }
  
  /**
   * on input change
   * @param value
   */
  changed(value){
    this.getData(value)
    this.setState({value})
  }
  
  /**
   * get data from source based on keyword
   * @param val
   */
  getData(val){
    const options = this.props.source.filter(option => option.indexOf(val) >= 0)
    this.setState({options})
  }
  
  
  /**
   * render the component
   * @return {XML}
   */
  render() {
    return (
        <Wrapper>
          <Input value={this.state.value}  changed={this.changed.bind(this)} placeholder={this.props.placeholder}/>
          <Results options={this.state.options}/>
        </Wrapper>
    );
  }
  
  
  /**
   * defines proptypes
   * @return {{placeholder: *, list: *}}
   */
  static get propTypes() {
    return {
      placeholder: PropTypes.string,
      source: PropTypes.array
    }
  }
  
  /**
   * sets default proptypes
   * @return {{placeholder: string, list: Array}}
   */
  static get defaultProps() {
    return {
      placeholder: 'Placeholder',
      source: []
    }
  }
}
export default Autocomplete;
