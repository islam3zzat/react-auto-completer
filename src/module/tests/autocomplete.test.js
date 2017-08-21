import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from '../autocomplete';
import {render, mount} from 'enzyme';

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