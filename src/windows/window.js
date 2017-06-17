'use strict';

const { BrowserWindow } = require('electron');

const Window = {
  config: {},
  view: null,
  pwd: '',
  open,
  toggleDevTools
};

function open(openDevTools = false) {
  this.view = new BrowserWindow(this.config);
  this.view.loadURL(`file://${this.pwd}/index.html`);
  if (openDevTools) {
    this.toggleDevTools();
  }
}

function toggleDevTools() {
  this.view.toggleDevTools();
}

module.exports = function Factory(windowConfig) {
  return Object.assign({}, Window, windowConfig);
};
