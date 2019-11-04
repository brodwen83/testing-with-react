import axios from 'axios';
import { GET_POSTS } from './posts.types';

export const fetchPosts = () => async dispatch => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`,
    );

    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
