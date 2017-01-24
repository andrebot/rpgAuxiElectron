'use strict';

const Window = require('../window');

const config = {
  width: 300,
  height: 465,
  minWidth: 300,
  minHeight: 465
};

const CreateDivinityWindow = {
};

module.exports = function factory() {
  return Object.assign(Object.create(Window({ config, pwd: __dirname })), CreateDivinityWindow);
};
