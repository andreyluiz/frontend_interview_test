// @flow
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import App from './components/App';
import { reducer } from './state';
import './index.scss';

// eslint-disable-next-line no-underscore-dangle
// Basic Redux Dev Tools for easy debugging
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store: Object = createStore(reducer, composeEnhancers(
  /**
   * Thunk middleware allows my to create async functions that provides me
   * the dispatch function. This way I can dispatch action during the async
   * workflow.
   */
  applyMiddleware(thunk),
));

const element = document.getElementById('app');

// Mounting our application
render(
  <Provider store={store}>
    <App />
  </Provider>,
  element);
