import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../autocomplete';
import {render, shallow, mount } from 'enzyme';

const mockSource  = [
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet,' +
  'consectetur',
  'adipisicing',
  'elit.',
  'Asperiores'];
it('renders Autocomplete without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Autocomplete />, div);
});

describe('user provided props', () => {
  it('should render default placeholder', () => {
    let autoComplete = <Autocomplete />
    let renderedAutocomplete = render(autoComplete)
    let input = renderedAutocomplete.find('input')
    expect(input.attr('placeholder')).toBe('Placeholder')
  })
  it('should render provided placeholder', () => {
    let autoComplete = <Autocomplete placeholder="search please"/>
    let renderedAutocomplete = render(autoComplete)
    let input = renderedAutocomplete.find('input')
    expect(input.attr('placeholder')).toBe('search please')
  })
})
describe('user provided source', () => {
  let autoComplete, renderedAutocomplete
  beforeAll(() => {
    autoComplete = <Autocomplete source={mockSource} />
    renderedAutocomplete = render(autoComplete)
  })
  it('shouldnt show options by default', () => {
    let ul = renderedAutocomplete.find('ul')
    expect(ul.length).toBe(0)
  })
  it('shouldnt be active by default', () => {
    let mountedAutocomplete = mount(autoComplete)
    expect(mountedAutocomplete.state().active).toBeFalsy()
  })
  it('should have no list items', () => {
    let mountedAutocomplete = mount(autoComplete)
    expect(mountedAutocomplete.find('li').length).toBe(0);
  })
  it('should have provided list items', () => {
    let mountedAutocomplete = mount(autoComplete)
    mountedAutocomplete.find('input').simulate('focus');
    expect(mountedAutocomplete.find('li').length).toBe(mockSource.length);
  })
})