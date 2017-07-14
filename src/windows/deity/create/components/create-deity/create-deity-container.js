'use strict';

const { connect } = require('react-redux');
const CreateDeity = require('./create-deity');

const mapStateToProps = function (state) {
  return {
    name: state.name
  }
};

module.exports = connect(
  mapStateToProps
)(CreateDeity);
