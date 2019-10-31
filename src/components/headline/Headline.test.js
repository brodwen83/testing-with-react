/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { findByTestAtrr, checkProps } from '../../../utils/test';
import Headline from './Headline';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Description',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
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
