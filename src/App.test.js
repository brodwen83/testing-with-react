import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../utils/test';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'title 1', body: 'sample body' },
        { title: 'title 2', body: 'sample body' },
        { title: 'title 3', body: 'sample body' },
      ],
    };
    wrapper = setup(initialState);
  });

  it('should render without errors ', () => {
    const appComponent = findByTestAtrr(wrapper, 'appComponent');
    expect(appComponent.length).toBe(1);
  });
});
