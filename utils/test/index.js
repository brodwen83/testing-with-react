/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../src/redux/rootReducer';
import { middlewares } from '../../src/redux/store';

/**
 * @description Finds Component's testable attribute
 * @param {React.Component} component Component with the attribute
 * @param {String} attr attribute name type of string
 */
export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

/**
 * @description Check for Component's props and returns error if fails in expected props
 * @param {React.Component} component Component's props
 * @param {Object} expectedProps Expected Component's props
 */
export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
