'use strict';

const React = require('react');
const InputField = require('./inputField');

module.exports = class FormTextField extends React.Component {
  render() {
    const {fieldName, label, type} = this.props;
    const col = this.props.columns || 12;
    const inputClass = `input-field col ${col}`;

    return (
      <InputField inputClass={inputClass} 
                  id={fieldName}
                  name={fieldName}
                  label={label}
                  type={type}/>
    );
  }
};
