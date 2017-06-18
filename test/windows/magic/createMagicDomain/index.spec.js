'use strict';

const chai                    = require('chai');
const sinonChai               = require('sinon-chai');
const MagicDomainCreateWindow = require('../../../../src/windows/magic/createMagicDomain');
// const {
//   _buildFromTemplateSpy,
//   _setApplicationMenuSpy
// } = require('../../electron.mock.spec');

chai.should();
chai.use(sinonChai);

describe('Create Magic Domain Window', function() {
  before(function() {
    this.createMagicDomainWindow = MagicDomainCreateWindow();
  });
});
