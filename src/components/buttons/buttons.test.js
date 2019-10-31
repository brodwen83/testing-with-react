import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../utils/test';

import SharedButton from './SharedButton';

describe('Buttons', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Render SharedButton', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAtrr(wrapper, 'sharedButtonComponent');
      expect(button.length).toBe(1);
    });
  });
});
