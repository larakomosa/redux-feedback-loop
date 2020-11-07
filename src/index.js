import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};
function feedbackForm(state = feedback, action) {
  if (action.type === 'FEELING') {
    return {
      ...state,
      feeling: action.payload,
    };
  } else if (action.type === 'UNDERSTANDING') {
    return {
      ...state,
      understanding: action.payload,
    };
  } else if (action.type === 'SUPPORT') {
    return {
      ...state,
      support: action.payload,
    };
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    feedbackForm,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
