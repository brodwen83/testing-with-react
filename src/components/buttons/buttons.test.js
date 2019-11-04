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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        //https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', () => {
      const button = findByTestAtrr(wrapper, 'sharedButtonComponent');
      expect(button.length).toBe(1);
    });

    it('should emit callback onClick event', () => {
      const button = findByTestAtrr(wrapper, 'sharedButtonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
