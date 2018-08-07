import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// const logger = createLogger();

export default () => {
  return createStore(rootReducer, applyMiddleware(ThunkMiddleware));  // logger
}