'use strict';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const mainApp = require('./reducers');
const mainWindow = require('./components/main/main-container');

const store = createStore(mainApp);

render(
  <Provider store={store}>
    <mainWindow />
  </Provider>,
  document.getElementById('container')
);
