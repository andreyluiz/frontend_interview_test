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
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store: Object = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

const element = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element);
