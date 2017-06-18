'use strict';

const chai = require('chai');
const sinonChai = require('sinon-chai');
const MainWindow = require('../../src/windows/mainWindow');
const {
  _buildFromTemplateSpy,
  _setApplicationMenuSpy
} = require('../electron.mock.spec');

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
