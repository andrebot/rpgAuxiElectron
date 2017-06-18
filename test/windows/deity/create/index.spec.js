'use strict';

const chai              = require('chai');
const sinonChai         = require('sinon-chai');
const DeityCreateWindow = require('../../../../src/windows/deity/create');
// const {
//   _buildFromTemplateSpy,
//   _setApplicationMenuSpy
// } = require('../../electron.mock.spec');

chai.should();
chai.use(sinonChai);

describe('Create Deity Window', function() {
  before(function() {
    this.createDeityWindow = DeityCreateWindow();
  });
});
