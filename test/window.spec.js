'use strict';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const mockRequire = require('mock-require');

mockRequire('electron', {
  BrowserWindow: function Brow() {
    this.loadURL = sinon.spy();
  }
});

const Window = require('../src/window');

chai.should();
chai.use(sinonChai);

describe('Window', function() {
  before(function() {
    this.defaultConfig = {
      config: {
        width: 800,
        heigth: 600
      },
      pwd: `${__dirname}/assets`
    };

    this.window = Window(this.defaultConfig);
  });

  it('should have the main methods available', function() {
    this.window.open.should.exist;
  });

  it('should be able to open itself', function() {
    this.window.open();

    this.window.view.loadURL.should.have.been.calledOnce;
  });
});