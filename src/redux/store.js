import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const middlewares = [reduxThunk];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore,
);

export const store = createStoreWithMiddlewares(rootReducer);
