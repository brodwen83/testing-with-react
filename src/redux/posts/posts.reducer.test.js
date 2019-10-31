import { GET_POSTS } from './posts.types';
import postsReducer from './posts.reducer';

describe('Post Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if receiving type', () => {
    const posts = [
      { title: 'Title 1' },
      { title: 'Title 2' },
      { title: 'Title 3' },
      { title: 'Title 4' },
    ];
    const newState = postsReducer(undefined, {
      type: GET_POSTS,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  });
});
