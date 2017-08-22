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
      options
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
  selectOption(option){
    this.props.setOption(option)
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
      fetchApi({url, method, val, searchKey}).then(filterResponse).then(this.setOptions);
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
        <Wrapper ref="wrap">
          <Input
            active={this.state.active}
            setActive={this.setActive}
            value={this.props.value}
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
      url: PropTypes.string,
      searchKey: PropTypes.string,
      method: PropTypes.string,
      source: PropTypes.array,
      filterResponse: PropTypes.func
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
