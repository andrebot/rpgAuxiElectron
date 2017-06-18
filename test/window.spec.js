'use strict';

const chai        = require('chai');
const sinon       = require('sinon');
const sinonChai   = require('sinon-chai');
const Window = require('../src/windows/window');
const {
  _toggleDevToolsSpy,
  _loadURLSpy,
  _onSpy
} = require('./electron.mock.spec');

chai.should();
chai.use(sinonChai);

describe('Window', function() {
  beforeEach(function() {
    this.defaultConfig = {
      config: {
        width: 800,
        heigth: 600
      },
      pwd: `${__dirname}/assets`
    };

    _toggleDevToolsSpy.reset();
    _loadURLSpy.reset();
    _onSpy.reset();

    this.window = Window(this.defaultConfig);
  });

  it('should have the main methods available', function() {
    this.window.open.should.exist;
    this.window.should.include.all.keys(['open', 'toggleDevTools']);
  });

  it('should be able to open itself without the devtools', function() {
    this.window.open();

    this.window.view.loadURL.should.have.been.calledOnce;
    this.window.view.toggleDevTools.should.have.not.been.called;
  });

  it('should be able to open itself with the devtools', function() {
    this.window.open(true);

    this.window.view.loadURL.should.have.been.calledOnce;
    this.window.view.toggleDevTools.should.have.been.calledOnce;
  });
});
