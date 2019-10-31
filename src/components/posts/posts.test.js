import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../utils/test';
import PostItem from './PostItem';

describe('PostItem Component', () => {
  const expectedProps = {
    title: 'Test Title',
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi!',
  };

  describe('Checking ProTypes', () => {
    it('should NOT throw warning', () => {
      const propsErr = checkProps(PostItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Render PostItem', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PostItem {...expectedProps} />);
    });

    it('should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'postItemComponent');
      expect(component.length).toBe(1);
    });
    it('should render title without errors', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });
    it('should render body without errors', () => {
      const body = findByTestAtrr(wrapper, 'componentBody');
      expect(body.length).toBe(1);
    });
  });

  describe('Comonent should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vel.',
      };
      wrapper = shallow(<PostItem {...props} />);
    });

    it('should NOT render', () => {
      const component = findByTestAtrr(wrapper, 'postItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
