'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mockRequire = require('mock-require');

const _buildFromTemplateSpy = sinon.spy();
const _setApplicationMenuSpy = sinon.spy();

mockRequire('electron', {
  Menu: {
    buildFromTemplate: _buildFromTemplateSpy,
    setApplicationMenu: _setApplicationMenuSpy
  }
});

const MainWindow = require('../../src/mainWindow');

chai.should();
chai.use(sinonChai);

describe('Main Window', function() {
  before(function() {
    this.mainWindow = MainWindow(this.defaultConfig);
  });

  it('should be able to initialize itself', function() {
    this.mainWindow.init();

    _buildFromTemplateSpy.should.have.been.calledOnce;
    _setApplicationMenuSpy.should.have.been.calledOnce;
  });
});
