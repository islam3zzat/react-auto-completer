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
    // if url is provided neglect provided options
    let options = props.url ? []: props.source
    this.state = {
      options,
      value: props.value
    }
    this.getData = debounce(this.getData, 300)
    // bind component methods
    this.setActive = this.setActive.bind(this)
    this.changed = this.changed.bind(this)
    this.setOptions = this.setOptions.bind(this)
    this.selectOption = this.selectOption.bind(this)
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
    let wrapper = ReactDOM.findDOMNode(this.wrap)
    if(!wrapper.contains(e.target)){
      this.setActive(false);
    }
  }
  
  /**
   * on input change
   * @param value
   */
  changed(value){
    if(this.props.beforeSearch) {
      this.props.beforeSearch(value)
    }
    this.getData(value)
    this.setState({value})
  }
  selectOption(option){
    if(this.props.afterSearch) {
      this.props.afterSearch(option)
    }
    if(this.props.beforeUpdateValue) {
      this.props.beforeUpdateValue(option)
    }
  
    this.props.setOption(option)
    this.setState({value: option})
    if(this.props.afterUpdateValue) {
      this.props.afterUpdateValue(option)
    }
  
    this.setActive(false)
  }
  /**
   * update options
   * @param data
   */
  setOptions(data){
    this.setState({options: data});
  }
  /**
   * get data from source based on keyword
   * @param val
   */
  getData(val){
    let {url, method, searchKey, filterResponse} = this.props;
    if(this.props.url){
      fetchApi({url, method, val, searchKey}, this.props.additionalParams, this.props.additionalHeaders).then(filterResponse).then(this.setOptions);
    } else {
      const options = this.props.source.filter(option => option.indexOf(val) >= 0)
      this.setOptions(options)
    }
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
        <Wrapper ref={wrap => this.wrap = wrap}>
          <Input
            active={this.state.active}
            setActive={this.setActive}
            value={this.state.value}
            changed={this.changed}
            placeholder={this.props.placeholder}/>
          <Results select={this.selectOption} active={this.state.active} options={this.state.options}/>
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
      url: PropTypes.string,
      searchKey: PropTypes.string,
      additionalParams: PropTypes.object,
      additionalHeaders: PropTypes.object,
      method: PropTypes.string,
      source: PropTypes.array,
      filterResponse: PropTypes.func,
      beforeSearch: PropTypes.func,
      afterSearch: PropTypes.func,
      beforeUpdateValue: PropTypes.func,
      afterUpdateValue: PropTypes.func,
      setOption: PropTypes.func,
    }
  }
  
  /**
   * sets default proptypes
   * @return {{placeholder: string, list: Array}}
   */
  static get defaultProps() {
    return {
      placeholder: 'Placeholder',
      source: [],
      method: 'GET'
    }
  }
}
export default Autocomplete;
