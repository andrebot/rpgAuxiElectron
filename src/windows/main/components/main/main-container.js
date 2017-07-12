'use strict';

const { connect } = require('react-redux');
const Main = require('./main');

const mapStateToProps = (state) => state;

module.exports = connect(
  mapStateToProps
)(Main);
