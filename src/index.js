'use strict';

const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 500, height: 300 });
  mainWindow.loadURL(`file://${__dirname}/mainWindow/index.html`);
});
