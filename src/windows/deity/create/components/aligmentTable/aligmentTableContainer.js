'use strict';

const { connect } = require('react-redux');
const AligmentTable = require('./aligmentTable');

const mapStateToProps = function (state) {
  return {
    alignmets: state.alignmets
  }
};

module.exports = connect(
  mapStateToProps
)(AligmentTable);
