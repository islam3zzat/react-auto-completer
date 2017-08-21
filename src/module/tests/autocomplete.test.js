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