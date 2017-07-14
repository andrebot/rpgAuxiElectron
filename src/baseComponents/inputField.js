'use strict';

const React = require('react');

module.exports = class FormTextField extends React.Component {
  render() {
    const {id, name, label, inputClass, type} = this.props;

    return (
      <div className={inputClass}>
        <input id={id} name={name} type={type} className="validate" />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
};
