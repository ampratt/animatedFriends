import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import storeFactory from './store';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
// import ThunkMiddleware from 'redux-thunk';
// import { searchFriends, fetchFriends } from './store/reducers';

// const logger = createLogger();
// const rootReducer = combineReducers({
//   searchFriends,
//   fetchFriends
// });
// const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger));
const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();