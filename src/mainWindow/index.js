'use strict';

const Window = require('../window');

const config = {
  width: 800,
  heigth: 600
};

const MainWindow = {};

module.exports = function factory() {
  return Object.assign(Object.create(Window({ config, pwd: __dirname })), MainWindow);
};
