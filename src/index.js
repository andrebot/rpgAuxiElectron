'use strict';

const { app } = require('electron');
const MainWindow = require('./mainWindow');

const mainWindow = MainWindow();

app.on('ready', () => {
  console.log(mainWindow);
  mainWindow.init();
  mainWindow.open();
});
