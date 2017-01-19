'use strict';

const { app } = require('electron');
const MainWindow = require('./mainWindow');

const mainWindow = MainWindow();

app.on('ready', () => {
  mainWindow.open();
});
