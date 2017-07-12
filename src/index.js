'use strict';

const { app, ipcMain } = require('electron');
const MainWindow = require('./windows/main');

const mainWindow = MainWindow();

app.on('ready', () => {
  mainWindow.init(ipcMain);
  mainWindow.open();
});

app.on('window-all-closed', () => {
  app.quit();
});
