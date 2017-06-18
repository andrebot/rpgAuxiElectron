'use strict';

const mock  = require('mock-require');
const sinon = require('sinon');

const _toggleDevToolsSpy = sinon.spy();
const _loadURLSpy = sinon.spy();
const _onSpy = sinon.spy();
const _buildFromTemplateSpy = sinon.spy();
const _setApplicationMenuSpy = sinon.spy();

mock('electron', {
  BrowserWindow: function () {
    this.toggleDevTools = _toggleDevToolsSpy;
    this.loadURL = _loadURLSpy;
    this.on = _onSpy
  },
  Menu: {
    buildFromTemplate: _buildFromTemplateSpy,
    setApplicationMenu: _setApplicationMenuSpy
  }
});

module.exports = {
  _toggleDevToolsSpy,
  _loadURLSpy,
  _onSpy,
  _buildFromTemplateSpy,
  _setApplicationMenuSpy
};
