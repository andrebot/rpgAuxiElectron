'use strict';

const { Menu } = require('electron');
const Window = require('../window');
const CreateDivinity = require('../createDivinity');

const _createDivinityView = CreateDivinity();
const _config = {
  width: 800,
  heigth: 600
};
const _menuTemplate = [
  {
    label: 'Master\'s Content Mng',
    submenu: [
      {
        label: 'Divinity',
        submenu: [
          {
            label: 'Create',
            click: _openCreateDivinity
          }
        ]
      }
    ]
  }
];

const MainWindow = {
  init
};

function init() {
  _configMenu();
}

function _openCreateDivinity() {
  _createDivinityView.open();
}

function _configMenu() {
  Menu.setApplicationMenu(Menu.buildFromTemplate(_menuTemplate));
}

module.exports = function factory() {
  return Object.assign(Object.create(Window({ _config, pwd: __dirname })), MainWindow);
};
