'use strict';

const Window = require('../window');

const config = {
  width: 400,
  height: 585,
  minWidth: 400,
  minHeight: 585
};

const CreateDivinityWindow = {
};

module.exports = function factory() {
  return Object.assign(Object.create(Window({ config, pwd: __dirname })), CreateDivinityWindow);
};
