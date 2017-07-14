'use strict';

const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const MainWindow = require('./components/main/main-container');
const mainApp = require('./reducers');

const store = createStore(mainApp);

render(
  <Provider store={store}>
    <MainWindow />
  </Provider>,
  document.getElementById('container')
);
