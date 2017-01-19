'use strict';

const { BrowserWindow } = require('electron');

const Window = {
  config: {},
  view: null,
  pwd: '',
  init,
  open
};

function init() {
  this.view = new BrowserWindow(this.config);
}

function open() {
  this.view.loadURL(`file://${this.pwd}/index.html`);
}

module.exports = function Factory(windowConfig) {
  return Object.assign({}, Window, windowConfig);
};
