'use strict';

const {combineReducers} = require('redux');
const alignments = require('./alignments');

module.exports = combineReducers({
  alignments
});
