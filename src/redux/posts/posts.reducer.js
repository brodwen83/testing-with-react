import { GET_POSTS } from './posts.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    default:
      return state;
  }
};
