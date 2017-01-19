'use strict';

const { app, ipcMain } = require('electron');
const MainWindow = require('./mainWindow');

const mainWindow = MainWindow();

app.on('ready', () => {
  mainWindow.init(ipcMain);
  mainWindow.open();
});
