import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

import '../../setupTests';
import { findByTestAtrr } from '../../../utils/test';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without error', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'logoImg');
    expect(wrapper.length).toBe(1);
  });
});
