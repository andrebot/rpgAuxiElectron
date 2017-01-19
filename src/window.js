'use strict';

const { BrowserWindow } = require('electron');

const Window = {
  config: {},
  view: null,
  pwd: '',
  open
};

function open() {
  this.view = new BrowserWindow(this.config);
  this.view.loadURL(`file://${this.pwd}/index.html`);
}

module.exports = function Factory(windowConfig) {
  return Object.assign({}, Window, windowConfig);
};
