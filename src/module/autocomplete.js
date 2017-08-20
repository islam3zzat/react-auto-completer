import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './component/Input'
import Results from './component/Results'
import Wrapper from './styled/Wrapper'
import debounce from 'lodash.debounce'
import ReactDOM from 'react-dom';
import {fetchApi} from './autocomplet.helpers'

class Autocomplete extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      options: props.source,
      active: false
    }
    this.getData = debounce(this.getData, 300)
    // bind component methods
    this.setActive = this.setActive.bind(this)
    this.changed = this.changed.bind(this)
  }
  /**
   * once component mounted
   */
  componentDidMount(){
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }
  /**
   * before leaving
   */
  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }
  
  /**
   * handle click outside wrapper
   * @param e
   */
  handleOutsideClick(e) {
    let wrapper = ReactDOM.findDOMNode(this.refs.wrap)
    if(!wrapper.contains(e.target)){
      this.setActive(false);
    }
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
   * set weather results active state
   * @param active
   */
  setActive(active){
    if(active !== this.state.active){
      this.setState({active})
    }
    
  }
  /**
   * render the component
   * @return {XML}
   */
  render() {
    return (
        <Wrapper ref="wrap">
          <Input
            active={this.state.active}
            setActive={this.setActive}
            value={this.state.value}
            changed={this.changed}
            placeholder={this.props.placeholder}/>
          <Results active={this.state.active} options={this.state.options}/>
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
