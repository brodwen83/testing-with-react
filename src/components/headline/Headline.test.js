import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { findByTestAtrr } from '../../../utils/test';
import Headline from './Headline';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = { header: 'Test Header', desc: 'Test Description' };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });
    it('should render H1 without errors', () => {
      const component = findByTestAtrr(wrapper, 'header');
      expect(component.length).toBe(1);
    });
    it('should render description without errors', () => {
      const component = findByTestAtrr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });
  describe('Have no props', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
