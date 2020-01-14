import React from 'react';
import App from '../../pages/App';
import { shallow } from '../enzyme';

describe('App page', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeTruthy();
  });
});
