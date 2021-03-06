'use strict';

const { connect } = require('react-redux');
const Main = require('./main');

const mapStateToProps = function (state) {
  return {
    name: state.name
  }
};

module.exports = connect(
  mapStateToProps
)(Main);
