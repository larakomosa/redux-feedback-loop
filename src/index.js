import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'; //redux tools to be used
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (
  //reducer adjust data based on dispatch key
  state = { feeling: 0, understanding: 0, support: 0, comments: '' },
  action
) => {
  if (action.type === 'ADD_FEELING') {
    //feeling page
    return {
      ...state,
      feeling: action.payload,
    };
  } else if (action.type === 'ADD_UNDERSTANDING') {
    //understanding page
    return {
      ...state,
      understanding: action.payload,
    };
  } else if (action.type === 'ADD_SUPPORT') {
    //support page
    return {
      ...state,
      support: action.payload,
    };
  } else if (action.type === 'ADD_COMMENTS') {
    //comments page
    return {
      ...state,
      comments: action.payload,
    };
  } else if (action.type === 'START_OVER') {
    //when submit button is clicked, object is returned to initial state
    return { feeling: 0, understanding: 0, support: 0, comments: '' };
  }
  return state;
};

const storeInstance = createStore(
  //creates store so date can be access from designated pages
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
