'use strict';

const chai = require('chai');
// const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Window = require('../src/window');

chai.should();
chai.use(sinonChai);

describe('Window', function windowDescribe() {
  before(function mainBeforeEach() {
    this.defaultConfig = {
      config: {
        width: 800,
        heigth: 600
      },
      pwd: `${__dirname}/assets`
    };

    this.window = Window(this.defaultConfig);
  });

  it('should have the main methods available', function mainMethods() {
    this.window.open.should.exist;
  });
});
